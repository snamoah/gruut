const Hand = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M53.2851 5.75041C51.6139 5.4537 49.8924 5.69397 48.3662 6.43688C46.3968 5.20962 43.8484 5.45523 42.1498 7.0364L36.6893 12.1491V11.7037C36.6893 7.10276 32.9594 3.37292 28.3578 3.37292C25.5974 3.37292 23.3595 5.61083 23.3595 8.37121V24.691L19.2803 29.1149C18.1217 30.3658 17.4909 32.0156 17.5176 33.7204C17.4848 39.5287 17.9135 45.3317 18.8006 51.0721C18.8364 51.2033 18.889 51.3291 18.9569 51.4474L16.2377 59.097C15.2034 61.9443 16.2446 65.1303 18.7601 66.8183L19.712 67.4651C18.7403 70.2971 19.7731 73.4298 22.2375 75.1299L49.2159 93.625C49.6705 93.9362 49.9412 94.4511 49.9412 95.001C49.9412 97.7622 52.1791 100 54.9395 100H79.1552C80.6754 100.004 82.1139 99.3105 83.0574 98.1191C84.02 96.9079 84.3694 95.3198 84.004 93.8165L81.5716 84.8191C80.7158 80.8871 80.4641 76.8476 80.8249 72.8401C82.1978 55.4266 70.524 42.8474 67.563 40.6614C62.1162 36.6463 58.0538 32.4603 56.4139 29.1759C53.9563 24.2478 55.613 20.8765 57.214 17.6172C58.5572 14.8828 59.947 12.0568 57.9753 9.09277C56.9333 7.38574 55.2393 6.17831 53.2851 5.75041ZM28.3578 6.70537C31.1189 6.70537 33.3568 8.94327 33.3568 11.7037V15.2695L26.6919 21.508V8.37121C26.6919 7.92958 26.8674 7.50549 27.1801 7.19353C27.4921 6.8808 27.9162 6.70537 28.3578 6.70537ZM20.8501 33.6754C20.8363 32.8234 21.1521 31.9988 21.731 31.3741L26.1283 26.5971C26.1687 26.5627 26.2061 26.5269 26.2419 26.4888L36.0264 17.3327C36.121 17.261 36.2072 17.1794 36.2843 17.0894L44.4693 9.42456C45.1214 8.78996 46.1611 8.78996 46.8132 9.42456L46.9269 9.31091C46.9673 9.3582 47.0108 9.40168 47.0565 9.44287L46.9513 9.57788C48.7613 11.5389 48.7109 14.5754 46.8384 16.4762L40.2849 22.7681L31.0571 31.079C30.4576 31.7174 30.1426 32.5709 30.1823 33.445C27.0817 33.8485 24.4678 35.9544 23.4144 38.8987L21.323 44.781C20.9881 40.685 20.8813 36.0475 20.8501 33.6754ZM33.5002 33.3649L38.3154 29.0325C38.2521 30.4787 38.3048 31.9279 38.4741 33.3649H33.5002ZM19.3719 60.2335L26.5569 40.0153C27.2762 38.0169 29.1762 36.6874 31.3005 36.6974H45.5989C45.9444 36.6996 46.2816 36.808 46.563 37.0078L55.1882 43.1197C55.5253 43.3531 55.7297 43.7352 55.7358 44.1456C55.7389 44.3798 55.6779 44.6101 55.5596 44.8122C55.5009 44.9091 55.4246 45.0052 55.3545 45.1006L52.6482 43.1647C51.2402 42.1533 49.55 41.6102 47.8162 41.6117H34.7031C31.1754 41.6171 28.0336 43.8443 26.8597 47.1714L20.8615 64.2173L20.6449 64.0708C19.3848 63.2394 18.8585 61.6529 19.3719 60.2335ZM54.2302 16.1695C52.5468 19.592 50.2441 24.2806 53.44 30.6861C55.9944 35.8065 62.1498 40.8284 65.5921 43.3623C67.8048 44.9907 78.7685 56.6211 77.5092 72.5984C77.1202 76.9643 77.4009 81.3646 78.3421 85.6452L80.7745 94.6433C80.8882 95.1368 80.7707 95.6555 80.4557 96.0528C80.1407 96.4495 79.6617 96.6814 79.1552 96.6829H54.9311C54.0113 96.6829 53.2653 95.9361 53.2653 95.0163C53.2676 93.368 52.4568 91.8249 51.0991 90.8906L24.1222 72.3955C22.879 71.5397 22.3633 69.957 22.8645 68.5329L30.0007 48.2713C30.7055 46.279 32.5865 44.945 34.7 44.9389H47.8132C48.8528 44.9381 49.8665 45.2638 50.7109 45.8702L58.4039 51.3772C58.9447 51.7708 59.0957 52.5106 58.754 53.085C58.0554 54.2566 56.9067 55.0887 55.5772 55.3893C54.247 55.689 52.8519 55.4297 51.7184 54.6715L48.386 52.4473C47.5668 51.8959 46.6012 51.6022 45.6134 51.6037H40.4817C38.3124 51.5908 36.3865 52.9904 35.7297 55.0582C35.6313 55.3694 35.491 55.7561 35.3331 56.1909C34.1333 59.5066 31.334 67.2652 37.6854 69.8128C38.243 70.0607 38.8913 69.9837 39.3757 69.613C39.86 69.2423 40.1026 68.6367 40.0087 68.0341C39.9149 67.4307 39.4992 66.9281 38.9256 66.7214C36.1309 65.6002 36.7205 62.1525 38.4672 57.3259C38.6434 56.8392 38.8006 56.4113 38.9073 56.0643C39.1293 55.3847 39.767 54.9278 40.4817 54.9362H45.6119C45.9391 54.9362 46.2587 55.0338 46.5302 55.2161L49.8627 57.4426C51.7558 58.7064 54.0845 59.1389 56.3048 58.6386C58.5252 58.1382 60.4435 56.7485 61.6113 54.7951C62.8332 52.7296 62.281 50.0729 60.3367 48.6664L58.0592 47.028C58.1804 46.8617 58.3124 46.6955 58.4154 46.5284C59.6525 44.4644 59.0866 41.7963 57.1195 40.4119L48.4966 34.2901C47.6492 33.6906 46.637 33.3672 45.5989 33.3649H41.8309C41.4847 30.7845 41.5686 28.1637 42.0781 25.6101L49.1777 18.859C51.7444 16.2801 52.3408 12.3337 50.6506 9.11107C52.4171 8.55503 54.3286 9.33151 55.208 10.9607C56.0341 12.204 55.5711 13.4404 54.2302 16.1695Z"
        fill="black"
      />
      <path
        d="M47.1465 70.0225C46.5813 69.8341 45.9581 69.9615 45.5119 70.3566C45.0657 70.7517 44.8644 71.355 44.9834 71.9393C45.1031 72.5236 45.5249 72.9995 46.0901 73.1887C49.9359 74.4777 59.9202 79.1023 59.9202 84.9373C59.9202 85.8572 60.6662 86.6031 61.5861 86.6031C62.5067 86.6031 63.2527 85.8572 63.2527 84.9373C63.2473 75.5044 47.8048 70.2376 47.1465 70.0225Z"
        fill="black"
      />
      <path
        d="M58.4025 63.9244C58.0418 63.4499 57.456 63.2043 56.8656 63.2798C56.2745 63.3553 55.7688 63.7398 55.5392 64.2889C55.3088 64.8381 55.3889 65.4682 55.7497 65.9418C58.2919 69.2743 62.5214 73.2634 68.2313 73.2634C69.1519 73.2634 69.8979 72.5175 69.8979 71.5968C69.8979 70.6769 69.1519 69.931 68.2313 69.931C63.8859 69.931 60.4932 66.6634 58.4025 63.9244Z"
        fill="black"
      />
      <path
        d="M59.542 0.558513L57.9539 2.22512C57.5199 2.65149 57.3529 3.28076 57.5184 3.86579C57.6839 4.45158 58.1561 4.90084 58.7487 5.0366C59.3421 5.17314 59.9622 4.97558 60.3665 4.52099L61.9545 2.85438C62.3885 2.42801 62.5556 1.79874 62.3901 1.21295C62.2245 0.627923 61.7524 0.178665 61.1598 0.0428958C60.5663 -0.093636 59.9462 0.103916 59.542 0.558513Z"
        fill="black"
      />
      <path
        d="M67.4296 8.03783C67.3106 7.61222 67.0269 7.25144 66.6409 7.03482C66.2558 6.8182 65.7996 6.76328 65.374 6.88303L63.2078 7.49323C62.3993 7.7129 61.8791 8.49853 61.9935 9.32916C62.1079 10.159 62.8211 10.7746 63.6594 10.7677C63.8127 10.7677 63.9652 10.7463 64.1124 10.7044L66.2786 10.0957C66.7043 9.97597 67.065 9.69147 67.2809 9.30552C67.4967 8.91957 67.5501 8.46344 67.4296 8.03783Z"
        fill="black"
      />
      <path
        d="M62.7875 14.8149C61.9012 14.5662 60.9813 15.0826 60.7326 15.9689C60.4832 16.8552 61.0003 17.7751 61.8859 18.0237L64.0521 18.6339C64.2001 18.6751 64.3526 18.6965 64.5059 18.6957C65.3381 18.695 66.0429 18.0802 66.1558 17.2557C66.2686 16.4304 65.7553 15.6493 64.9537 15.4243L62.7875 14.8149Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="100" height="100" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default Hand
