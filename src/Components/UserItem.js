import React from 'react';
import PropTypes from 'prop-types'
const UserItem = (props) => {
    const user = props.userProps;
    return (
        <div className = "col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item">
            <div className="card" style={{ width: "18rem", height: '100%' }}>
                <div className='row'>
                    <img src="https://kenh14cdn.com/thumb_w/620/2016/1-1475304575558.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <div className='row' style={{ paddingTop: "10px", paddingLeft: "10px"}}>
                            <div className='col-sm-4'>
                            </div>
                            <div className='col-sm-4'>
                            </div>
                            <div className='col-sm-4'>
                            <button type="button" className="btn btn-link">Link</button>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

UserItem.propTypes = {
    userProps: PropTypes.object.isRequired, 

}

export default UserItem;