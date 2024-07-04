import ArticleInput from "./article-input.js"

let articleInput
describe("ArticleInput Suite", () => {
  beforeAll(() => {
    articleInput = new ArticleInput({
      id: "email",
      placeholder: "Entrez votre email",
      className: ""
    })
  })

  test("should have a text type by default", () => {
    expect(articleInput.type).toBe("text")
  })

  test("should have no className  by default", () => {
    expect(articleInput.className).toBe("")
  })
})
