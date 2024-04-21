import React from 'react';

class HTMLBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    this.validateHTML();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.code !== this.props.code) {
      this.validateHTML();
    }
  }

  validateHTML() {
    const { code } = this.props;
    try {
      const doc = new DOMParser().parseFromString(code, 'text/html');
      if (doc.body.innerHTML === '') {
        throw new Error('Invalid HTML code.');
      }
      this.setState({ error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { code } = this.props;
    const { error } = this.state;

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <iframe
          title="HTML Browser"
          srcDoc={code}
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      </div>
    );
  }
}

export default HTMLBrowser;
