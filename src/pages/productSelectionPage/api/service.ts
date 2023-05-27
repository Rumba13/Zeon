import { SelectionProductDto, SelectionTagDto, SelectionTitleDto } from "../lib/dtos"
import ProductSelectionPageRepository from "./repository";

export default class ProductSelectionPageService {
    private repository: ProductSelectionPageRepository;

    constructor(repository: ProductSelectionPageRepository) {
        this.repository = repository
    }

    public async loadSelectionTags(): Promise<SelectionTagDto[]> {
        return await this.repository.loadSelectionTags();
    }
    public async loadSelectionProducts(): Promise<SelectionProductDto[]> {
        return await this.repository.loadSelectionProducts();
    }
    public async loadSelectionTitle(): Promise<SelectionTitleDto> {
        return await this.repository.loadSelectionTitle();
    }
}