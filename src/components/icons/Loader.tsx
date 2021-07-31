const Loader = ({ size = 40 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="rotate(0 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#ef476f">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8571428571428571s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(51.42857142857143 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#ffd166">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.7142857142857143s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(102.85714285714286 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#06d6a0">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5714285714285714s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(154.28571428571428 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#118ab2">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.42857142857142855s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(205.71428571428572 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#073b4c">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.2857142857142857s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(257.14285714285717 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#ef476f">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.14285714285714285s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(308.57142857142856 50 50)">
      <rect x="40" y="0" rx="10" ry="15" width="20" height="30" fill="#ffd166">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
  </svg>
)

export default Loader
