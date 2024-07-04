import ArticleInput from "./ArticleInput";

let articleInput;
describe("ArticleInput Suite", () => {
  beforeAll(() => {
    articleInput = new ArticleInput({
      id: "email",
      placeholder: "Entrez votre email",
      className: "",
    });
  });

  test("should have a text type by default", () => {
    expect(articleInput.type).toBe("text");
  });

  test("should have a text type by default", () => {
    expect(articleInput.className).toBe("");
  });
});
