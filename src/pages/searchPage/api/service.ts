import { PaginatorDto, SearchProductDto, SearchTagDto, SearchPageTitleDto } from "../lib/dtos"
import SearchPageRepository from "./repository";

export default class SearchPageService {
    private repository: SearchPageRepository;

    constructor(repository: SearchPageRepository) {
        this.repository = repository
    }

    public async loadSearchTags(): Promise<SearchTagDto[]> {
        return await this.repository.loadSearchTags();
    }
    public async loadSearchProducts(): Promise<SearchProductDto[]> {
        return await this.repository.loadSearchProducts();
    }
    public async loadSearchTitle(): Promise<SearchPageTitleDto> {
        return await this.repository.loadSearchPageTitle();
    }
    public async loadPaginator(): Promise<PaginatorDto> {
        return await this.repository.loadPaginator();
    }
}