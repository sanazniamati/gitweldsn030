import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
  TextPath,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";

export default function App() {
  const url = "img.gif";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          {/*<Image x={100} y={10} image={image} />*/}
          <Text text={text} x={10} y={50} fontSize={20} />
        </Group>
        <Line stroke={"green"} strokeWidth={2} points={[151, 261, 250, 261]} />
        <Line stroke={"green"} strokeWidth={2} points={[151, 453, 260, 453]} />
        <Text text={"t2"} x={157} y={329} fontSize={40} />

        <Arrow
          points={[153, 265, 153, 449]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(250, 260);
            context.lineTo(443, 260);
            context.quadraticCurveTo(456, 398, 548, 409);
            context.lineTo(548, 455);
            context.lineTo(250, 455);
            context.lineTo(250, 368);
            context.lineTo(268, 362);
            context.lineTo(235, 351);
            context.lineTo(250, 344);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          stroke="red"
          // fill={"lightGray"}
          strokeWidth={4}
        />
        {/*  right shape*/}
        <Line stroke={"green"} strokeWidth={2} points={[873, 245, 969, 245]} />
        <Line stroke={"green"} strokeWidth={2} points={[873, 452, 969, 452]} />
        <Arrow
          points={[969, 247, 969, 450]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Text text={"t1"} x={930} y={325} fontSize={40} />

        <Line stroke={"green"} strokeWidth={2} points={[576, 409, 937, 409]} />
        <Arrow
          points={[937, 411, 937, 451]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          fill={"yellow"}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Text text={"C"} x={898} y={414} fontSize={30} />

        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(686, 247);
            context.lineTo(875, 247);
            context.lineTo(875, 340);
            context.lineTo(855, 346);
            context.lineTo(895, 355);
            context.lineTo(875, 360);
            context.lineTo(875, 453);
            context.lineTo(577, 453);
            context.lineTo(577, 408);
            context.quadraticCurveTo(665, 412, 686, 247);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          // fill={"lightGray"}
          stroke="red"
          strokeWidth={4}
        />

        {/*Beta*/}
        <Line stroke={"green"} strokeWidth={2} points={[685, 245, 698, 182]} />
        <Line stroke={"green"} strokeWidth={2} points={[666, 327, 664, 178]} />
        <Text x={677} y={150} text={"β"} fontSize={30} />
        <Arrow
          points={[647, 183, 660, 180]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Arrow
          points={[715, 188, 700, 183]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(664, 182);
            context.quadraticCurveTo(680, 178, 697, 184);
            context.fillStrokeShape(shape);
          }}
          stroke="blue"
          strokeWidth={2}
        />
        {/*  R*/}
        <Arrow
          points={[578, 321, 621, 391]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <TextPath
          x={586}
          y={310}
          fill={"#333"}
          text={"R"}
          data={"M 0 0 L 300 320 "}
          fontSize={30}
        />
        {/*    b*/}
        <Line stroke={"green"} strokeWidth={2} points={[547, 455, 547, 530]} />
        <Line stroke={"green"} strokeWidth={2} points={[578, 453, 578, 530]} />
        <Text x={553} y={485} text={"b"} fontSize={40} />
        <Arrow
          points={[550, 524, 576, 524]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          pointerAtEnding={true}
          stroke={"blue"}
          strokeWidth={3}
        />
      </Layer>
    </Stage>
  );
}
