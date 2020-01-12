import React from 'react';
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';

import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  OwnBox,
  OwnSymbol,
  OwnText,
  LogOutButton,
  LogOutText,
  BuyButton,
  BuyText,
  MenuOptions,
  Option,
  Left,
  OptionText,
} from './styles';

export default function Menu() {
  const dispatch = useDispatch();

  return (
    <Container>
      <OwnBox>
        <OwnSymbol />
        <OwnText>You don't own AlgoExpert</OwnText>
      </OwnBox>

      <MenuOptions>
        <Option>
          <Left>
            <MaterialIcons
              name="help-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Help</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option>
          <Left>
            <MaterialIcons
              name="person-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Profile</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option>
          <Left>
            <MaterialCommunityIcons
              name="settings-outline"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>Settings</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>

        <Option>
          <Left>
            <MaterialIcons
              name="history"
              size={24}
              color="rgba(255, 255, 255, 0.8)"
            />
            <OptionText>History</OptionText>
          </Left>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color="rgba(255, 255, 255, 0.8)"
          />
        </Option>
      </MenuOptions>

      <BuyButton>
        <MaterialCommunityIcons
          name="credit-card-multiple"
          color="rgba(255, 255, 255, 0.8)"
          size={26}
          style={{
            transform: [
              {
                rotate: '-15deg',
              },
            ],
          }}
        />
        <BuyText>Buy AlgoExpert</BuyText>
      </BuyButton>

      <LogOutButton onPress={() => dispatch(signOut())}>
        <Feather name="log-out" color="rgba(255, 255, 255, 0.8)" size={26} />
        <LogOutText>Log Out</LogOutText>
      </LogOutButton>
    </Container>
  );
}