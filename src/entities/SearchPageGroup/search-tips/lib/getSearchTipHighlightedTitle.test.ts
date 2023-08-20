import { getSearchTipHighlightedTitle } from "./getSearchTipHighlightedTitle"

test("returns highlighted part", () => {
    const title = "бомже кофемашина";
    const query = "кофе";

    const { partBeforeHighlight, highlightedPart, partAfterHighlight } = getSearchTipHighlightedTitle(title, query);

    expect(partBeforeHighlight).toBe("бомже ");
    expect(highlightedPart).toBe(query);
    expect(partAfterHighlight).toBe("машина");
})