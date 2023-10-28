import "./styles.scss";
import { useParams } from "react-router-dom";
import {ErrorBoundary} from "../../../shared/ui/error-boundary";
import {ProductDetailsCard} from "../../../entities/product-details-card";
import {ProductIdType} from "../../../shared/api/types/product-id-type";

export function ProductPage() {
    const { id: productId } = useParams();

    return <div className="product-page">
        <ErrorBoundary>
            <ProductDetailsCard productId={productId as unknown as ProductIdType}/>
        </ErrorBoundary>
    </div>
}