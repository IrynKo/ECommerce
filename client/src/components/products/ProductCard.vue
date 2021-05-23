<template>
  <div class="product-main-info">
    <div class="product-main-info__heading">
      <img :src="product.imgUrl" alt="..." class="product-main-info__photo" />
      <div class="card-body">
        <h5 class="product-main-info__title">{{ product.title }}</h5>
        <p class="product-main-info__price">$ {{ product.price }}</p>

        <router-link
          :to="{ name: 'ProductDetails', params: { id: product._id } }"
          class="product-main-info__btn"
          >Show Product</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
};
</script>

<style lang="scss" scoped>
.product-main-info {
  width: 30%;
  margin-right: 15px;
  margin-bottom: 40px;
  &__title {
    font-family: "Montserrat-Bold";
    font-size: 20px;
    color: #caac86;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-right: 20px;
  }
  &__photo {
    max-width: 100%;
  }
  &__price {
    color: #caac86;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.3;
  }
  &__btn {
    display: block;
    font-size: 20px;
    color: #954409;
    text-decoration: none;
    text-transform: capitalize;
    margin-top: 10px;
  }
}
</style>
