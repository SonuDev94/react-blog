import { Alert, Button , Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

function BootStrap() {
    return <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <h4>BootStarp </h4>
        <button>OK</button>

        <Button>OK</Button>
        {
            ['primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark'].map((variant) => <Alert key={variant} variant={variant}>Heeli</Alert>)
        }
    </div>
}

export default BootStrap;