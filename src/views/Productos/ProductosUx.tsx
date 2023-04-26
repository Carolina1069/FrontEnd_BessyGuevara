import Page from "@components/Page";
import { ISanciones, IGetAllProductosResponse } from "@store/Services/Productos";
import ErrorField from "@components/ErrorField";
import Card from "@components/Card";
import Paging from "@components/Paging";
import { formatCurrency } from "@helpers/NumberFormat";

import "./Productos.css";
import { Button } from "@components/Buttons";
interface ISancionessUxProps {
  error?: any;
  data?: IGetAllProductosResponse;
  isLoading?: boolean;
  changePageLimit?: (page: number, limit: number) => void;
  addPageClick?: () => void;
  viewDetailClick?: (id: string) => void;
}
const ProductoCard = (
  item: ISanciones,
  viewDetailClick: (id: string) => void
) => {
  return (
    <Card
      key={item._id}
      onClick={() => { 
        viewDetailClick(item._id);
      }}
    >
      <h2>Nombre: {item.nombre}</h2>
      <hr/>
      <p>Sancion: {item.tsancion}</p>
      <p>Edad: {item.edad}</p>
      <p>Comentario: {item.tcomentario}</p>
      <span>Fecha: {new Date(item.date).toLocaleDateString()}</span>
    </Card>
  );
};
const ProductoUx = ({
  error,
  data,
  isLoading,
  changePageLimit = (p, l) => {
    console.log("PG", { p, l });
  },
  addPageClick = () => {},
  viewDetailClick = (id) => {},
}: ISancionessUxProps) => {
  return (
    <Page pageTitle="Sanciones">
      <Button
        style={{ backgroundColor: "#0984e3",color:"white" }}
        onClick={() => {
          addPageClick();
        }}
      >
        Nueva Sancion
      </Button>
      <section className="ProductosHolder">
        {isLoading && <div>Loading...</div>}
        {error && <ErrorField>Error al cargar Sanciones</ErrorField>}
        {data &&
          data.items.map((o: ISanciones) => ProductoCard(o, viewDetailClick))}
      </section>
      <Paging
        currentPage={data?.page || 1}
        totalPages={data?.totalPages || 0}
        pageLimit={data?.itemsPerPage || 10}
        onPageChange={(page) => {
          changePageLimit(page, data?.itemsPerPage || 10);
        }}
        onLimitChange={(limit) => {
          changePageLimit(data?.page || 1, limit);
        }}
      />
    </Page>
  );
};

export default ProductoUx;
