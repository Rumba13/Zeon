import { PaginatorDto, SearchProductDto, SearchTagDto, SearchPageTitleDto } from "../lib/dtos";
import { Repository } from "../api/repository";
import { Service } from "../api/service";
import { makeAutoObservable } from "mobx";

class SearchPageState {
    private service: Service

    public searchTags?: SearchTagDto[]
    public products?: SearchProductDto[]
    public title?: SearchPageTitleDto
    public paginator: PaginatorDto = {
        currentPage: 1,
        pagesCount: 40
    }

    private setProducts = (products: SearchProductDto[]) => this.products = products;
    private setTitle = (title: SearchPageTitleDto) => this.title = title;
    private setSearchTags = (searchTags: SearchTagDto[]) => this.searchTags = searchTags;
    private setPaginator = (paginator: PaginatorDto) => this.paginator = paginator;

    constructor(service: Service) {
        makeAutoObservable(this);
        this.service = service;
    }

    public async loadProducts() {
        this.setProducts(await this.service.loadSearchProducts());
    }
    public async loadPageTitle() {
        this.setTitle(await this.service.loadPageTitle());
    }
    public async loadSearchTags() {
        this.setSearchTags(await this.service.loadSearchTags());
    }
    public async loadPaginator() {
        this.setPaginator(await this.service.loadPaginator());
    }
}

export { SearchPageState as SearchPageStateType };
export const searchPageState = new SearchPageState(new Service(new Repository()));