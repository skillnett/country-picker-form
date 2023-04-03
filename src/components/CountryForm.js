import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Stack,
  Button,
  Switch,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { countries, countriesWhiteList } from '../data/countries';
import { Checkbox } from './Checkbox';

export const CountryForm = () => {
  const [selectedCountries, setSelectedCountries] =
    useState(countriesWhiteList);
  const [showSelected, setShowSelected] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleCheckboxChange = ({ target }, country) => {
    const isChecked = target.checked;

    if (isChecked) {
      return setSelectedCountries([...selectedCountries, country]);
    }

    const selected = selectedCountries.filter(c => c !== country);
    setSelectedCountries(selected);
  };

  const handleClearAll = () => {
    setSelectedCountries(countriesWhiteList);
    setSearchText('');
  };

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchText.toLowerCase())
  );

  const countryList = showSelected ? selectedCountries : filteredCountries;

  const handleSubmit = () => {
    console.log(selectedCountries);
  };

  return (
    <Flex
      w={['100%', null, 500]}
      h={450}
      bg="white"
      rounded="14px"
      padding={5}
      flexDir="column"
      shadow="9px 32px 35px rgba(0, 0, 0, 0.0464653)"
      border="1px solid"
      borderColor="#E1E3E6"
    >
      <Input
        placeholder="Search..."
        onChange={({ target }) => setSearchText(target.value)}
        value={searchText}
        border="none"
        borderBottom="1px solid"
        borderColor="#ECECEC"
        px={0}
        _placeholder={{ color: '#343434' }}
        rounded={0}
        mb={5}
        _focusVisible={{
          outline: 'none',
          shadow: 'none',
        }}
      />

      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <FormControl display="flex" alignItems="center">
          <Switch
            id="selected-only"
            checked={showSelected}
            onChange={() => setShowSelected(!showSelected)}
          />

          <FormLabel
            htmlFor="selected-only"
            mb="0"
            ml={2.5}
            color="#232323"
            letterSpacing="-0.5px"
            fontWeight={600}
            fontSize={16}
            lineHeight="22px"
          >
            Show selected only
          </FormLabel>
        </FormControl>

        <Button
          type="button"
          onClick={handleClearAll}
          variant="link"
          color="#232323"
          letterSpacing="-0.5px"
          fontWeight={600}
          fontSize={16}
          lineHeight="22px"
          _hover={{ textDecoration: 'none' }}
        >
          Clear all
        </Button>
      </Flex>

      <Box flex={1} overflowY="scroll">
        <Stack spacing={5}>
          {countryList.map(country => (
            <Checkbox
              key={country}
              label={country}
              onChange={e => handleCheckboxChange(e, country)}
              isChecked={selectedCountries.includes(country)}
              isDisabled={countriesWhiteList.includes(country)}
            />
          ))}
        </Stack>
      </Box>

      <Flex
        justify="flex-end"
        mt={4}
        pt={5}
        borderTop="1px solid"
        borderColor="#ECECEC"
      >
        <Button
          h={38}
          type="button"
          onClick={handleSubmit}
          rounded={50}
          bg="#60D09B"
          color="white"
          minW={87}
          fontSize={16}
          fontWeight={400}
          _hover={{ bg: '#60D09B' }}
        >
          Save
        </Button>
      </Flex>
    </Flex>
  );
};
