import ProductosNewUx from "./ProductoNewUx";
import {
  useNewProductoMutation,
  INewSanciones,
} from "@store/Services/Productos";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductoNew = () => {
  const [form, setForm] = useState<INewSanciones>({
    tcomentario:"",
    tsancion:"",
    edad: 1,
    nombre: "",
    date: new Date(),
  })
  const [newProducto, { isLoading, error }] = useNewProductoMutation();
  const Navigate = useNavigate();

  const onChangeHandler = (name: string, value: string | number) => {
    setForm({ ...form, [name]: value });
  };
  const onSubmitHandler = async () => {
    try {
      const data = await newProducto(form).unwrap();
      console.log(data);
      Navigate("/productos");
    } catch (error) {
      console.log(error);
    }
  };
  const onCancelHandler = () => {
    console.log("cancel");
    Navigate("/productos");
  };
  return (
    <ProductosNewUx
      form={form}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
      onCancelHandler={onCancelHandler}
    />
  );
};
export default ProductoNew;
