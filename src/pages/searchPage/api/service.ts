import { PaginatorDto, SearchProductDto, SearchTagDto, SearchPageTitleDto } from "../lib/dtos"
import { Repository } from "./repository";

export class Service {
    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository
    }

    public async loadSearchTags(): Promise<SearchTagDto[]> {
        return await this.repository.loadSearchTags();
    }
    public async loadSearchProducts(): Promise<SearchProductDto[]> {
        return await this.repository.loadSearchProducts();
    }
    public async loadPageTitle(): Promise<SearchPageTitleDto> {
        return await this.repository.loadPageTitle();
    }
    public async loadPaginator(): Promise<PaginatorDto> {
        return await this.repository.loadPaginator();
    }
}