import { Text } from '@chakra-ui/react';
import '../styles/checkbox.css';

export const Checkbox = ({ label, onChange, isChecked, isDisabled }) => {
  return (
    <label class="checkbox-container">
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <span class="checkmark">
        <svg
          className="icon-unchecked"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="22" rx="8" fill="#ECECEC" />
        </svg>

        <svg
          className="icon-disabled"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="22" rx="8" fill="#ECECEC" />
          <path
            d="M17.5656 8.38749L10.1932 15.7593C9.64729 16.3054 8.76171 16.3054 8.21526 15.7593L4.4096 11.9534C3.86347 11.4074 3.86347 10.5217 4.4096 9.97553C4.95584 9.42928 5.84136 9.42928 6.38736 9.97532L9.20453 12.7925L15.5875 6.40953C16.1337 5.86328 17.0193 5.8637 17.5654 6.40953C18.1114 6.95566 18.1114 7.84104 17.5656 8.38749Z"
            fill="#C4C4C4"
          />
        </svg>

        <svg
          className="icon-checked"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="22" height="22" rx="8" fill="#457DF1" />
          <path
            d="M17.5656 8.38749L10.1932 15.7593C9.64729 16.3054 8.76171 16.3054 8.21526 15.7593L4.4096 11.9534C3.86347 11.4074 3.86347 10.5217 4.4096 9.97553C4.95584 9.42928 5.84136 9.42928 6.38736 9.97532L9.20453 12.7925L15.5875 6.40953C16.1337 5.86328 17.0193 5.8637 17.5654 6.40953C18.1114 6.95566 18.1114 7.84104 17.5656 8.38749Z"
            fill="white"
          />
        </svg>
      </span>

      <Text mt={0.5}>{label}</Text>
    </label>
  );
};
