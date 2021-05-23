<template>
  <main class="homepage">
    <Container>
      <ProductFilterForm class="apartments-filter" @submit="filter" />
    </Container>
    <Container>
      <p v-if="!filteredApartments.length">Found nothing</p>
      <ProductsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ProductItem
            :key="apartment._id"
            :id="apartment._id"
            :description="apartment.descr"
            :rating="apartment.rating"
            :price="apartment.price"
            :imgScr="apartment.imgUrl"
          />
        </template>
        <template v-slot:title>New Title</template>
      </ProductsList>
    </Container>
  </main>
</template>

<script>
import ProductsList from "../components/apartment/ProductsList";
//import apartments from '../components/apartment/apartments'
import ProductItem from "../components/apartment/ProductItem";
import ProductFilterForm from "../components/apartment/ProductFilterForm";
import Container from "../components/shared/Container";
//import { getProductsList } from "../services/product.service";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    ProductsList,
    ProductItem,
    ProductFilterForm,
    Container,
  },
  data() {
    return {
      /*apartments: [],*/
      text: "",
      filters: {
        /*city: "",*/
        price: "",
      },
    };
  },
  computed: {
    ...mapGetters(["products"]),
    filteredApartments() {
      return this.filterByPrice(this.products);
    },
  },
  /*async created() {
    try {
      const { data } = await getProductsList();
      console.log("data", data);
      this.apartments = data;
    } catch (error) {
      console.log("error", error);
    }
  },*/
  methods: {
    ...mapActions(["getProducts"]),
    filter({ /*city,*/ price }) {
      /*this.filters.city = city;*/
      this.filters.price = price;
    },
    created() {
      this.getProducts();
      console.log("f");
    },
    /*filterByCity(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },*/
    filterByPrice(products) {
      if (!this.filters.price) return products;
      //console.log("products", products);
      return products.filter((product) => {
        return product.price >= this.filters.price;
      });
    },
  },
};
</script>

<style>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
