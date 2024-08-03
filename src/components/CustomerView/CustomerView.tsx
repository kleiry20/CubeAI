import "./CustomerView.css";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer } from "../../features/selectedCustomer/selectedCustomer";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import { useEffect } from "react";
import { fetchCustomerImages } from "../../features/customerImage/customerImageSlice";

const CustomerView = () => {
  const dispatch = useDispatch();

  const customerList = useSelector((state: RootState) => state.customer.data);

  const selectedCustomer = useSelector(
    (state: RootState) => state.selectedCustomer.selectedCustomer
  );
  const imageList = useSelector(
    (state: RootState) => state.customerImage.imageList
  );

  useEffect(() => {
    dispatch(fetchCustomerImages(selectedCustomer.id));

    let count = 1;
    const interval = setInterval(() => {
      let number = Number(selectedCustomer.id) + count * 9;
      dispatch(fetchCustomerImages(number));
      count += 1;
    }, 10000);
    return () => clearInterval(interval);
  }, [selectedCustomer]);

  return (
    <div className="customer-view">
      <div className="list-wrapper">
        {customerList
          ? customerList.map((customer) => (
              <div
                className={`list ${
                  selectedCustomer.id == customer.id ? "active" : ""
                }`}
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
            <h3 className="data-h3">
              Customer {selectedCustomer.id} details here
            </h3>
            <p className="data-p">{selectedCustomer.title}</p>
            <PhotoGrid imageList={imageList} />
          </div>
        ) : (
          <p>error</p>
        )}
      </div>
    </div>
  );
};

export default CustomerView;
