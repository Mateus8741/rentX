import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "@/dtos/CarDTO";
import { Car as ModelCar } from "@/database/model/Car";
import GasolineSvg from "@assets/gasoline.svg";

import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from "./styles";
import { getAccessoryIcon } from "@/utils/getAccessoryIcon";

interface Props extends RectButtonProps {
  data: ModelCar;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcons = getAccessoryIcon(data.fuel_type);

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcons width={20} height={20} />
          </Type>
        </About>
      </Details>

      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
