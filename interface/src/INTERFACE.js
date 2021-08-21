import Container_Nav from "./components/desktop_nav/container_nav/container_nav";
//Bottom Main Bar
import Sub_Frame from "./bozon/sub_frame/sub_frame";
//SubFrame for application req. UI abstraction.

const Core_CSS = {
  width: '100%',
  hieght: '100%',
}

//Interface_mainWindow
function INTERFACE() {
  return (
    <div className="INTERFACE" style={Core_CSS}>
          <Sub_Frame/>
          <Container_Nav/>
    </div>
  );
}

export default INTERFACE;
