import React from 'react';

const FormField = (props)=>{
    console.log(props.formData)
    return(
        <div>
            <input {...props.formData.config}
            onChange={e => props.onChangeHandler(e, props.formData.element)} />
        </div>
    )
}
export default FormField;