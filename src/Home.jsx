import React from 'react';

export const Home = ()=>{

      const contentDetail = () => {
        return (
          <>
          <p style={{marginTop: 30}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit
          vestibulum tincidunt. Quisque eu blandit quam. Vivamus fermentum
          ligula vel tristique molestie. Donec ultricies felis at vestibulum
          vulputate. Integer rhoncus pulvinar dui, eget condimentum odio
          facilisis at. Pellentesque interdum vestibulum condimentum. Sed a
          viverra lectus. Sed tincidunt arcu aliquet venenatis aliquam.
          Vestibulum vestibulum quam ac enim imperdiet, a convallis metus
          efficitur. Donec egestas mollis eros. Curabitur pellentesque volutpat
          urna in molestie. Praesent vel vulputate arcu, sed convallis lectus.
          Mauris tempor dolor ac libero pretium fermentum. Donec in lectus vitae
          mi dictum eleifend. Curabitur vitae elit placerat, gravida ipsum
          fringilla, placerat lectus. Nullam nibh lacus, congue eu lorem in,
          posuere sollicitudin nunc. Pellentesque posuere dolor sed ante
          consectetur sagittis sed id felis. Praesent vitae imperdiet metus.
          Nulla facilisi. Nam arcu ligula, cursus eget tortor eget, commodo
          pulvinar nibh. Cras eget aliquam orci, sed cursus est. Maecenas
          iaculis ultricies egestas. Aliquam in nibh a arcu rutrum mattis.
          Nullam iaculis sollicitudin erat, non malesuada metus egestas ac.
          Morbi varius luctus nisi. Vestibulum id mollis mi. Duis egestas ante
          sodales arcu semper venenatis. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Curabitur ut sagittis
          massa, pulvinar lacinia diam. Etiam aliquam suscipit dui vel accumsan.
          Integer eget tincidunt tellus. Integer fermentum lobortis elementum.
          Praesent blandit suscipit neque, in viverra urna. Nulla volutpat,
          libero sit amet dictum convallis, lectus turpis lacinia mauris, a
          finibus lectus augue a turpis. In hac habitasse platea dictumst.
          Aenean suscipit porta magna quis fermentum. Aliquam erat volutpat.
          Aliquam a elit eget dolor congue lobortis. Suspendisse et faucibus
          ante. Nulla consequat lacus sapien, sed malesuada lacus pulvinar non.
          Aliquam nec ipsum posuere eros convallis dictum. Vivamus sodales
          ullamcorper consectetur. Phasellus ornare nisl tortor, eget mattis
          dolor ornare at. Cras viverra elementum eleifend.
        </p>

        <img src="https://images3.alphacoders.com/118/thumb-1920-1185634.jpg" style={{height:300, width: 300, marginTop: 30}}></img>
          </>
        )
      }
    return(
        <div className="home-page">
            {contentDetail()}
            {contentDetail()}
            {contentDetail()}
        </div>
    );
};