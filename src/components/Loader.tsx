export function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="w-28 h-28"
      >
        <circle
          fill="none"
          stroke-opacity="1"
          stroke="#808080"
          stroke-width=".5"
          cx="100"
          cy="100"
          r="0"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            dur="2s"
            values="1;80"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            calcMode="spline"
            dur="2s"
            values="0;25"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            calcMode="spline"
            dur="2s"
            values="1;0"
            keyTimes="0;1"
            keySplines="0 .2 .5 1"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  )
}