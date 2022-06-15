import { css, Global } from "@emotion/react";



export const globalStyles = (
  <Global
    styles={css`

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      html,
      body {
        background: #111;
        min-height: 100%;
        font-family: JetBrains Mono, monospace;
        font-size: 16px;
        text-align: left;
      }
    `}
  />
)
