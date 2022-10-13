import { useState, useEffect } from "react";
import ProductDetails from "../ProductDetails";
import ProductList from "../ProductList";
import SearchBar from "../SearchBar";
import useGetProducts from "../../hooks/useGetProducts";
import { AppStyles } from "./styles.css";
import { BehaviorSubject } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
} from "rxjs/operators";
import loadingIcon from "../../assets/loading-icon.svg";
import Loading from "../Loading/Loading";
const defaultImgUrl = loadingIcon;

const START = 0;
const MAX_NUMBER_ITEMS = 10;

function SearchPageComponent() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [search, setSearch] = useState([]);
  const [prevSearch, setPrevSearch] = useState([]);
  const [subject, setSubject] = useState(null);
  const [products, loading] = useGetProducts();
  const [scroll, setScroll] = useState(true);

  const onClickHandler = (productId) => {
    let product = products.filter((product) => product.id === productId);
    setSelectedProduct(product[0]);
  };

  const filterProducts = (products, words) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(words.toLowerCase())
    );
  };

  const getFirstElements = (data) => {
    setScroll(data.length >= MAX_NUMBER_ITEMS);
    return data.slice(START, MAX_NUMBER_ITEMS);
  };

  const setInitialValues = () => {
    setPrevSearch(getFirstElements(products));
    setSearch(products);
  };

  useEffect(() => {
    setInitialValues();
  }, [products]);

  useEffect(() => {
    if (subject === null) {
      const sub = new BehaviorSubject("");
      setSubject(sub);
    } else {
      const observable = subject
        .pipe(
          map((s) => {
            return { ...s, value: s?.value?.trim() };
          }),
          distinctUntilChanged(),
          filter((s) => s?.value?.length >= 3),
          debounceTime(500)
        )
        .subscribe((obj) => {
          let data = filterProducts(obj.products, obj.value);
          setSearch(data);
          console.log("data", data);
          let filteredData = getFirstElements(data);
          setPrevSearch(filteredData);
          console.log("filteredData", filteredData);
        });

      return () => {
        observable.unsubscribe();
        subject.unsubscribe();
      };
    }
  }, [subject]);

  const onChange = (e) => {
    if (subject) {
      if (e.target.value.length <= 3) {
        setInitialValues();
        return;
      }
      return subject.next({ value: e.target.value, products });
    }
  };

  const onEndScroll = () => {
    let index = prevSearch.length;
    let end = index + MAX_NUMBER_ITEMS;
    if (end > search.length) {
      end = search.length;
      setScroll(false);
    }
    setPrevSearch((prevSearch) => [...prevSearch, ...search.slice(index, end)]);
  };

  return (
    <div css={AppStyles}>
      <Loading visible={loading}>
        <figure className="loading-container">
          <img className="loading" src={defaultImgUrl} alt="loading" />
        </figure>
      </Loading>
      <SearchBar onChange={onChange} />
      <div className="product-container">
        <ProductList
          products={prevSearch}
          onClickHandler={onClickHandler}
          onEndScroll={onEndScroll}
          scroll={scroll}
        />
        <ProductDetails
          title={selectedProduct?.title}
          sku={selectedProduct?.sku}
          description={selectedProduct?.description}
          price={selectedProduct?.price}
          img={selectedProduct?.img}
        />
      </div>
    </div>
  );
}

export default SearchPageComponent;
