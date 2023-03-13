
const URL = "http://localhost:3000/";
const listTemplate = document.querySelector("#posts-list").content;
const root = document.querySelector("#root");

class Post {
	constructor(template) {
		this.template = template;
		this.list = this.template.querySelector("ul").cloneNode();
		this.listElement = this.template.querySelector("li").cloneNode();
	}

	renderAll(posts) {
		if (posts.length !== 0) {
			const items = posts.map((post) => {
				const postDataEls = this.#destructPost(post);

				const li = this.listElement.cloneNode();
				li.dataset.id = post.id;
				li.append(...postDataEls);

				return li;
			});

			this.list.append(...items);
		}
		return this.list;
	}

	renderSingle(post) {
		const postDataEls = this.#destructPost(post);
		const li = this.listElement.cloneNode();
		li.dataset.id = post.id;

		li.append(...postDataEls);
		this.list.prepend(li);
	}

	#destructPost(post) {
		const postData = Object.entries(post);

		const postDataEls = postData.map(([name, value]) => {
			const p = document.createElement("p");

			p.className = name;
			p.textContent = `${name}: ${value}`;

			return p;
		});

		return postDataEls;
	}
}
const post = new Post(listTemplate);

fetch(URL + "posts", {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
})
	.then((response) => response.json())
	.then((data) => {
		root.append(post.renderAll(data));
	});

class Form {
	constructor() {}
	render() {
		const formTemplate = document.querySelector("#create-post").content;
		const form = formTemplate.querySelector("form");
		const formClone = form.cloneNode(true);

		formClone.addEventListener("submit", (event) => {
			event.preventDefault();
			const inputTitle = formClone.querySelector("#title");
			const inputIntro = formClone.querySelector("#intro");
			const text = formClone.querySelector("#text");
			const inputData = formClone.querySelector("#date");
			const inputAuthor = formClone.querySelector("#author");

			if (
				inputTitle.value === "" ||
				inputIntro.value === "" ||
				text.value === "" ||
				inputData.value === "" ||
				inputAuthor.value === ""
			) {
				alert("Error");
			} else {
				fetch(URL + "posts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						title: inputTitle.value,
						intro: inputIntro.value,
						text: text.value,
						data: inputData.value,
						author: inputAuthor.value,
					}),
				})
					.then((response) => response.json())
					.then((data) => {
						post.renderSingle(data);
					});
			}
		});
		return formClone;
	}
}

const form = new Form();
root.append(form.render());

