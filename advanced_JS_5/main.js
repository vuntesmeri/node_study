class Modal{
  constructor(el, title, text) {
    this.el = el
    this.title = title;
    this.text = text;
  }
  renderModal() {
    const modal = document.createElement('form');
    modal.style.background = 'grey';
    modal.style.width = '80vw'
    modal.style.margin = '20px'
    modal.style.padding = '5vw'
    modal.style.position = 'absolute';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Edit Title'
    const titleEdit = document.createElement('textarea');
    titleEdit.rows = '5';
    titleEdit.cols = '100';
    titleEdit.style.marginBottom = '20px'
    titleEdit.style.display = 'block'
    titleEdit.value = this.title;
    titleLabel.append(titleEdit);

    const textLabel = document.createElement('label');
    textLabel.textContent = 'Edit Text';
    const textEdit = document.createElement('textarea');
    textEdit.rows = '10';
    textEdit.cols = '100';
    textEdit.value = this.text;
    textEdit.style.display = 'block'
    textEdit.style.marginBottom = '20px'
    textLabel.append(textEdit)
    const buttonEdit = document.createElement('button');
    buttonEdit.type = 'button';
    buttonEdit.textContent = 'POST';
    const buttonCancel = document.createElement('button');
    buttonCancel.type = 'button'
    buttonCancel.textContent = 'CANCEL'
    buttonCancel.addEventListener('click', () => { buttonCancel.parentNode.remove() });
    
    modal.append(titleLabel, titleEdit, textLabel, textEdit, buttonEdit, buttonCancel);

    this.el.insertAdjacentElement('beforebegin', modal)
    return modal
  }
}

class Card{
  constructor(id) {
  this.id = id
  }

  inputData(data) {
    document.querySelector(`.text-post-${data.id}`).textContent = data.body;
    document.querySelector(`.title-post-${data.id}`).textContent = data.title;
  }

  renderCard() {
    const cardBody = document.createElement('div');
    const buttonDelete = document.createElement('button');
    buttonDelete.type = 'button';
    buttonDelete.style.float= 'right';
    buttonDelete.style.backgroundColor = 'red';
    buttonDelete.style.height = '2px';
    buttonDelete.style.width = '20px';
    buttonDelete.style.marginInline = '2px';
    buttonDelete.addEventListener('click', () => {
      const reply = confirm('Are You Sure?');
      if (reply) {
        fetch(`https://ajax.test-danit.com/api/json/posts/${this.id}`,
          {
            method: 'DELETE'}
          )
          .then(response => {
            (response.status == 200 & response.ok == true) ?
              cardBody.remove() : alert(`${response.status} - Not possible to delete`)
          })
          .catch(error => console.log(error))
      }
    })
    cardBody.append(buttonDelete);
    const buttonEdit = document.createElement('button');
    buttonEdit.type = 'button';
    buttonEdit.style.float= 'right';
    buttonEdit.style.backgroundColor = 'blue';
    buttonEdit.style.height = '2px';
    buttonEdit.style.width = '20px';
    buttonEdit.style.marginInline = '2px';
    buttonEdit.className = 'post-edit';
    buttonEdit.addEventListener('click', () => {
      const form = new Modal(cardBody, this.title, this.text)
      const editor = form.renderModal(cardBody).elements;
      editor[2].addEventListener('click', () => {
        fetch(`https://ajax.test-danit.com/api/json/posts/${this.id}`,
          {
            method: 'PATCH',
            body: JSON.stringify(
              {
                id: this.id,
                title: editor[0].value,
                body: editor[1].value,
              }),
            headers: {
              'Content-type': 'application/json'
            }
          })
          .then(response => (response.ok) ? response.json() : alert(response.status))
          .then(data => this.inputData(data))
          .then(editor[2].parentNode.remove())
          .catch(error => console.log(error))
      })
    })
    cardBody.append(buttonEdit);
    cardBody.id = this.id;
    cardBody.className = 'card-body';
    cardBody.style.backgroundColor = "#000";
    cardBody.style.padding = '20px';
    cardBody.style.margin = '20px';
    root.insertAdjacentElement('afterbegin',cardBody);
    return cardBody;
  }
}

    
class CardUser extends Card{
  constructor(id, userId, name, email) {
    super(id);
    this.userId = userId;
    this.name = name;
    this.email = email;
  }
  renderUser() {
    const cardName = document.createElement('div');
    cardName.id = this.userId+'-'+this.id;
    cardName.className = 'card-owner';
    cardName.insertAdjacentHTML('beforeend',`<h3 style="display:inline; color:#ffff"><b>${this.name}</b></h3> <p style="display:inline; color:grey; margin-left: 20px">   ${this.email}</p>`);
    const cardOwner = this.renderCard()
    cardOwner.append(cardName);
    return cardOwner
  }
}

class CardPosts extends CardUser{
  constructor(id, userId, name, email, title, text) {
    super(id, userId, name, email)
    this.title = title;
    this.text = text;
  }
  renderPosts() {
    const cardTitle = document.createElement('div');
    cardTitle.insertAdjacentHTML('beforeend',`<p class=title-post-${this.id} style='color: grey'>${this.title}</p>`);
    const cardText = document.createElement('div');
    cardText.insertAdjacentHTML('beforeend',`<p class=text-post-${this.id} style='color: #ffff'><b>${this.text}</b></p>`);
    this.renderUser().append(cardTitle, cardText)
  }
}

class newPost{
  constructor(root) {
    this.root = root
  }
  postnew(data, users) {
    const [user] = users.filter((user) => { return (user.id == data.userId) })
    const postnew = new CardPosts(data.id, data.userId, user.name, user.email, data.title, data.body);
    postnew.renderPosts()
  }
  addNew(users) {
    const buttonAdd = document.createElement('button');
    buttonAdd.type = 'button';
    buttonAdd.textContent = 'ADD NEW POST';
    buttonAdd.style.margin = '20px';
    this.root.insertAdjacentElement('beforebegin', buttonAdd);
    buttonAdd.addEventListener('click', () => {
    const addPost = new Modal(this.root, null, null);
    const newPostRender = addPost.renderModal(this.root).elements;
    newPostRender[2].addEventListener('click', () => {
      fetch("https://ajax.test-danit.com/api/json/posts", {
        method: 'POST',
        body: JSON.stringify({
          userId: 1,
          title: newPostRender[0].value,
          body: newPostRender[1].value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
        .then(data => this.postnew(data, users))
        .then(newPostRender[2].parentNode.remove())
      .catch(error=> console.log(error))
    }) 
    })
  }
}

class fetchInfo {
  constructor(...urls) {
    this.urlUsers = urls[0]
    this.urlPosts = urls[1]
  }
  async getfetch() {
    try {
      const responseUsers = await fetch(this.urlUsers);
      const users = await responseUsers.json();
      console.log(users);

      const responsePosts = await fetch(this.urlPosts);
      const posts = await responsePosts.json();
      console.log(posts);

      return { users, posts };
    } catch (error) {
      console.error(error);
    }
  }
}


const fetchPosts = new fetchInfo('https://ajax.test-danit.com/api/json/users', 'https://ajax.test-danit.com/api/json/posts')
fetchPosts.getfetch()
  .then(({ users, posts }) => {
    const root = document.getElementById('root');
    posts.forEach(post => {
      const [user] = users.filter((user) => { return (user.id == post.userId) })
      const bodytext = new CardPosts(post.id, post.userId, user.name, user.email, post.title, post.body);
      bodytext.renderPosts()
    })
    const newpost = new newPost(root);
    newpost.addNew(users)
  })
