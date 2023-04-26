import Page from "@components/Page";
import { DateField, Field } from "@components/InputField";
import ActionField from "@components/ActionField";
import { Button } from "@components/Buttons";
import { INewSanciones } from "@store/Services/Productos";

export interface IProductoDetailUx {
  isLoading: boolean;
  error: any;
  form: INewSanciones;
  onReturnClick: () => void;
  onSubmitDeleteHandler: () => void;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitUpdateHandler: () => void;
}

const ProductoDetailUx = ({
  form,
  isLoading,
  error,
  onChangeHandler,
  onReturnClick,
  onSubmitDeleteHandler,
  onSubmitUpdateHandler,
}: IProductoDetailUx) => {
  return (
    <Page pageTitle="Nueva Sancion">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error al cargar CashFlow</div>}
      {form && (
        <section>
          <Field
            name="nombre"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            labelText="Nombre"
            value={form.nombre}
          />
          <Field
            name="tsancion"
            labelText="Sancion"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            value={form.tsancion}
          />
          <Field
            name="tcomentario"
            labelText="Comentario"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            value={form.tcomentario}
          />
          <Field
            name="edad"
            labelText="edad"
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            value={String(form.edad)}
            type="number"
          />
          <DateField
            onChange={(e) => {
              onChangeHandler(e.target.name, e.target.value);
            }}
            labelText="Fecha"
            name="date"
            value={String(form.date)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <ActionField>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onReturnClick();
                }}
              >
                Atrás
              </Button>
            </ActionField>
            <ActionField>
              <Button
                style={{ backgroundColor: "#0984e3", color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSubmitUpdateHandler();
                }}
              >
                Actualizar
              </Button>
            </ActionField>
            <ActionField>
              <Button
                style={{ backgroundColor: "#d63031", color: "white" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSubmitDeleteHandler();
                }}
              >
                Eliminar
              </Button>
            </ActionField>
          </div>
        </section>
      )}
    </Page>
  );
};

export default ProductoDetailUx;
