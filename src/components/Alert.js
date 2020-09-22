import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {

    const alerts = useSelector((state => state.alert))
    return (
        <div>
            {
                alerts !== null && alerts.length > 0 ? alerts.map(alert => {
                        return (
                            <div key={alert.id} className="error-auth" >
                                {alert.msg}
                            </div>
                        )
                    }
                ) : ''
            } 
        </div>
    );
}

export default Alert;