import { getSearchTipHighlightedPart } from "./get-search-tip-highlighted-part"

test("returns highlighted part", () => {
    const title = "бомже кофемашина";
    const query = "кофе";

    const { partBeforeHighlight, highlightedPart, partAfterHighlight } = getSearchTipHighlightedPart(title, query);

    expect(partBeforeHighlight).toBe("бомже ");
    expect(highlightedPart).toBe(query);
    expect(partAfterHighlight).toBe("машина");
})