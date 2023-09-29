import { ComponentProps } from "react";
import { ProductSkeletonContainer, SkeletonItem } from "../styles/components/productSkeleton";

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>

export default function ProductSkeleton({ ...props }: ProductSkeletonProps) {
  return (
    <ProductSkeletonContainer {...props}>
      <SkeletonItem />
      <div>
        <SkeletonItem />
        <SkeletonItem />
      </div>
    </ProductSkeletonContainer>
  )
}