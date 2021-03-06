import React from 'react';

class FormError extends React.Component {
  render() {
    const { formError } = this.props;

    return (
      <div>
        {Object.keys(formError)
          .filter((fieldName) => formError[fieldName].length > 0)
          .map((fieldName) => (
            <p key={fieldName}>
              {fieldName} {formError[fieldName]}
            </p>
          ))}
      </div>
    );
  }
}

export default FormError;
