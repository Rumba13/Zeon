import {makeAutoObservable} from "mobx";
import {SearchService} from "../../../shared/api/search-service";
import {SortByType, SortType} from "../../../shared/api/types/filters-type";
import {SearchTagType} from "../../../shared/api/types/search-tag-type";
import {ProductService} from "../../../shared/api/product-service";
import {ProductIdType} from "../../../shared/api/types/product-id-type";
import {ProductSearchResultType} from "../../../shared/api/types/product-search-result-type";
import {productFullToProductSearchResult} from "./product-full-to-product-search-result";

class SearchPageStore {
    private service: SearchService
    private productService: ProductService;
    public searchTags?: SearchTagType[]
    public productIds: ProductIdType[] = []
    public title?: string

    currentPage: number = 1;
    pagesCount: number = 1;
    public searchQuery: string = "";
    public sortBy: SortByType = "popularity";
    public sortType: SortType = "desc";

    public setSearchQuery = (query: string) => this.searchQuery = query;
    private setProducts = (products: ProductIdType[]) => this.productIds = products;
    private setPageTitle = (title: string) => this.title = title;
    private setSearchTags = (searchTags: SearchTagType[]) => this.searchTags = searchTags;
    public setCurrentPage = (page: number) => this.currentPage = page;
    public setPageCount = (pagesCount: number) => this.pagesCount = pagesCount;
    public setSortType = (sortType: SortType) => this.sortType = sortType;
    public setSortBy = (sortBy: SortByType) => this.sortBy = sortBy;

    constructor(service: SearchService, productService: ProductService) {
        makeAutoObservable(this);
        this.service = service;
        this.productService = productService;
    }

    public async search(query: string) {
        this.searchQuery = query;

        this.setPageTitle(this.searchQuery);

        const searchResult = await this.service.search(this.searchQuery);

        this.setCurrentPage(1);
        this.setPageCount(searchResult.pageCount)
        this.setSearchTags(searchResult.searchTags);
        this.setProducts(searchResult.productsOnPage);
    }

    public loadProduct = async (productId: ProductIdType): Promise<ProductSearchResultType> => {
        return productFullToProductSearchResult(await this.productService.loadProduct(productId));
    }
}

export type {SearchPageStore as SearchPageStoreType};
export const searchPageStore = new SearchPageStore(new SearchService(), new ProductService());