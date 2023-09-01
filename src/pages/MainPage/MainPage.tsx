import { useEffect } from "react";
import TableListComp from "../../components/TableListComp/TableListComp";
import { FC } from "react";
import { getAllProducts } from "../../redux/Product/productOperations";
import { useAppDispatch } from "../../hooks/useCustomDispach";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return <TableListComp />;
};
export default MainPage;
