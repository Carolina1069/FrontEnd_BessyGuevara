import Page from "@components/Page";
import { Field } from "@components/InputField";
import ActionField from "@components/ActionField";
import { PrimaryButton, Button } from "@components/Buttons";
import { INewSanciones } from "@store/Services/Productos";
export interface IProductoNewUx {
  form: INewSanciones;
  onChangeHandler: (name: string, value: string | number) => void;
  onSubmitHandler: () => void;
  onCancelHandler: () => void;
}
const ProductoNewUx = ({
  form,
  onChangeHandler,
  onSubmitHandler,
  onCancelHandler,
}: IProductoNewUx) => {
  return (
    <Page pageTitle="Nueva Sancion">
      <section>
        <Field
          name="nombre"
          labelText="Nombre"
          value={form.nombre}
          type="text"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <Field
          name="tsancion"
          labelText="Sancion"
          value={form.tsancion}
          type="text"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
         <Field
          name="edad"
          labelText="Edad"
          value={String(form.edad)}
          type="number"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <Field
          name="tcomentario"
          labelText="Comentario"
          value={form.tcomentario}
          type="text"
          onChange={(e) => {
            onChangeHandler(e.target.name, e.target.value);
          }}
        />
        <ActionField>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSubmitHandler();
            }}
          >
            Guardar
          </PrimaryButton>
          <Button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCancelHandler();
            }}
          >
            Cancelar
          </Button>
        </ActionField>
      </section>
    </Page>
  );
};

export default ProductoNewUx;
