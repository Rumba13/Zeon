import { makeAutoObservable } from "mobx";
import {  SearchTagDto, SearchPageTitleDto } from "../lib/dtos";
import { Service } from "../api/service";
import { SortByType, SortType } from "../lib/filtersType";

class SearchPageStore {
    private service: Service

    public searchTags?: SearchTagDto[]
    public products: string[] = []
    public title?: SearchPageTitleDto

    //TODO ЭТо пиздец, я уверен что писал это бухим. Как можно было додуматься до ТАКОЙ ебатни. Пиздец. Ебанутый.(Снести) ((Стрелка вниз))
    currentPage: number = 1;
    pagesCount: number = 1;
    public searchQuery: string = "";
    public sortBy: SortByType = "popularity";
    public sortType: SortType = "desc";

    public setSearchQuery = (query: string) => this.searchQuery = query;
    private setProducts = (products: string[]) => this.products = products;
    private setTitle = (title: SearchPageTitleDto) => this.title = title; //TODO set pageTitleOnSearch
    private setSearchTags = (searchTags: SearchTagDto[]) => this.searchTags = searchTags;
    public setCurrentPage = (page: number) => this.currentPage = page;
    public setPageCount = (pagesCount: number) => this.pagesCount = pagesCount;

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
    public async search(query: string) {
        this.searchQuery = query;

        this.setTitle(this.searchQuery);

        const searchResult = await this.service.search(this.searchQuery);

        this.setCurrentPage(1);
        this.setPageCount(searchResult.pageCount)
        this.setSearchTags(searchResult.searchTags);
        this.setProducts(searchResult.productsOnPage);
    }
    public loadProduct = async (productId: string) => { //TODO add new type for product id
        const product = await this.service.loadProduct(productId);
        return product;
    }
}

export type { SearchPageStore as SearchPageStoreType };
export const searchPageStore = new SearchPageStore(new Service());