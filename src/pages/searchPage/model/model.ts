import { makeAutoObservable } from "mobx";
import { PaginatorDto, SearchProductDto, SearchTagDto, SearchPageTitleDto } from "../lib/dtos";
import { Repository } from "../api/repository";
import { Service } from "../api/service";
import { SortByType, SortType } from "../lib/filtersType";

class SearchPageStore {
    private service: Service

    public searchTags?: SearchTagDto[]
    public products?: SearchProductDto[]
    public title?: SearchPageTitleDto
    public paginator: PaginatorDto = {
        currentPage: 1,
        pagesCount: 40
    }
    public sortBy: SortByType = "popularity";
    public sortType: SortType = "desc";

    private setProducts = (products: SearchProductDto[]) => this.products = products;
    private setTitle = (title: SearchPageTitleDto) => this.title = title;
    private setSearchTags = (searchTags: SearchTagDto[]) => this.searchTags = searchTags;
    private setPaginator = (paginator: PaginatorDto) => this.paginator = paginator;

    public setSortType = (sortType: SortType) => {
        this.sortType = sortType
    };
    public setSortBy = (sortBy: SortByType) => {
        console.log(sortBy)
        this.sortBy = sortBy
    };

    constructor(service: Service) {
        makeAutoObservable(this);
        this.service = service;
    }

    public async loadProducts() { //TODO add filters logic, when finish back
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

export type { SearchPageStore as SearchPageStoreType };
export const searchPageStore = new SearchPageStore(new Service(new Repository()));