import "./Sidebar.css";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer } from "../../features/selectedCustomer/selectedCustomer";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import { useState, useEffect } from "react";
import { fetchCustomerImages } from "../../features/customerImage/customerImageSlice";

const Sidebar = () => {
  const [timerId, setTimerId] = useState<null | number>();
  const [idx, setIdx] = useState(1);
  const dispatch = useDispatch();

  const customerList = useSelector((state: RootState) => state.customer.data);

  const selectedCustomer = useSelector(
    (state: RootState) => state.selectedCustomer.selectedCustomer
  );
  const imageList = useSelector(
    (state: RootState) => state.customerImage.imageList
  );

  // initial load
  useEffect(() => {
    console.log("selectedCustomer.id", selectedCustomer.id);
    dispatch(fetchCustomerImages(selectedCustomer.id));
  }, [dispatch, selectedCustomer]);

  // ----- refreshing images
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(fetchCustomerImages(selectedCustomer.id));
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [dispatch, selectedCustomer]);

  console.log("imageList", imageList);

  return (
    <div className="sidebar">
      <div className="list-wrapper">
        {customerList
          ? customerList.map((customer) => (
              <div
                className="list"
                key={customer.id}
                onClick={() => {
                  dispatch(updateCustomer(customer));
                }}
              >
                <h1 className="list-h1">{customer.name}</h1>
                <p className="list-p">{customer.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="data">
        {selectedCustomer && imageList ? (
          <div className="data-wrapper">
            <h3 className="data-h3">Customer {selectedCustomer.id} details</h3>
            <p className="data-p">{selectedCustomer.title}</p>
            <PhotoGrid imageList={imageList} />
          </div>
        ) : (
          <p>some error</p>
        )}
      </div>

      {/* {imageList ? (
        imageList.map((item: any) => (
          <div key={item.id}>
            <img src={item.url} width={20} height={20} />
          </div>
        ))
      ) : (
        <p>nothing</p>
      )} */}
    </div>
  );
};

export default Sidebar;
