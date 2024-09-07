import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Cards({itemsData}) {
  return (
    <Row>
        {
            itemsData.length>=1?(itemsData.map((item)=>{
                return (  <Col key={item.id}  sm="12"className="mb-3" >
                    <Card className="d-flex flex-row" style={{  backgroundColor: "#f8f8f8"}}> 
                      <Card.Img className="img-item " style={{width : "180px"}} variant="top" src={item.imgUrl} />
                        <Card.Body>
                             <Card.Title className='justify-content-between d-flex'>
                                    <div className='item-title'>
                                        {item.title}
                                    </div> 
                                    <div className='item-price'>
                                        {item.price}
                                    </div>
                                </Card.Title>
                                 <Card.Text className='py-2'>
                                  <div className='item-description'>{item.description}</div>
                                  </Card.Text>
                        </Card.Body>
                </Card>
            </Col>)
            })): <h3 className="text-center">لا يوجد اصناف</h3>
        }
      
  </Row>
  )
}

export default Cards