import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Category({ filterCat, allCat }) {
  const onFilter = (cat) => {
    filterCat(cat);
  };

  return (
    <Row className='my-2 mb-5'>
      <Col xs="12" className='d-flex justify-content-center flex-wrap'>
        {allCat.length >= 1 ? (
          allCat.map((cat, index) => (
            <div key={index} className="m-2">
              <button
                onClick={() => onFilter(cat)}
                className='btn-search mx-2 my-1'
                style={{ minWidth: '100px' }} // Optional: ensures buttons don't shrink too small
              >
                {cat}
              </button>
            </div>
          ))
        ) : (
          <h3>لا يوجد اقسام !!</h3>
        )}
      </Col>
    </Row>
  );
}

export default Category;
