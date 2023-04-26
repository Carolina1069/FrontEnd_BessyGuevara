import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export interface ISanciones {
  nombre: string;
  tsancion: string;
  edad: number;
  tcomentario: string;
  date: Date;
  _id: string;
  userId?: string;
}

export interface INewSanciones {
  nombre: string;
  tsancion: string;
  tcomentario: string;
  edad: number;
  date: Date;
}

export interface IGetAllProductosResponse {
  total: number;
  totalPages: number;
  page: number;
  itemsPerPage: number;
  items: ISanciones[];
}

export const productosApi = createApi({
  reducerPath: "productosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_BASE_URL}/sanciones`,
    prepareHeaders: (headers, { getState }) => {
      headers.set("apikey", process.env.REACT_APP_API_KEY as string);
      const token = (getState() as RootState).sec.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ["Sanciones"],
  endpoints: (builder) => ({
    allProductos: builder.query({
      query: ({ page = 1, items = 10 }) => ({
        url: `?page=${page}&items=${items}`,
      }),
      providesTags: ["Sanciones"],
    }),
    productoById: builder.query<ISanciones,string>({
      query: (id ) => `byindex/${id}`,
      providesTags: ["Sanciones"],
    }),
    allProductosAdmin: builder.query({
      query: () => "/all",
      providesTags: ["Sanciones"],
    }),
    updateProducto: builder.mutation({
      query: ({body,id}:{body: Partial<INewSanciones>, id: string}) => {
        return {
          url: `update/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Sanciones"],
    }),
    deleteProducto: builder.mutation({
      query: (id: string) => {
        return {
          url: `delete/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Sanciones"],
    }),
    newProducto: builder.mutation({
      query: (body: INewSanciones) => {
        return {
          url: "new",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Sanciones"],
    }),
  }),
});

export const {
  useAllProductosQuery,
  useProductoByIdQuery,
  useAllProductosAdminQuery,
  useNewProductoMutation,
  useUpdateProductoMutation,
  useDeleteProductoMutation,
} = productosApi;
