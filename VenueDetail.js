import React from 'react';
import { Card,Icon,Button } from 'antd';
import { Modal} from 'antd';
import AddVenue from './AddVenue';

class VenueDetail extends React.Component{

    state = {
        visible: false ,
    
      };
      showModal = () => {
        this.setState({
          visible: true,
        });
      };

      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    render(){
        return(
            <div>
                <Card style={{width:'50%', backgroundColor:'#ECECEC'}}>
                   <h5 style={{fontSize:'20px',textAlign:"center"}}> Detail</h5>
                    <Button onClick={this.showModal}> 
                    <Icon type="edit" />
                        Edit
                    </Button>
                    <Modal
                            title="Add Venue"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            >
                            <AddVenue/>
                        </Modal>
                </Card>
            </div>

        );
    }

}
export default VenueDetail;