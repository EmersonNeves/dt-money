import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 3rem;
      font-size: 1.6rem;
      line-height: 1rem;
    }


    &.highlight-background{
      background: var(--green)
    }
  }

  
  div.highlight-background{
    p, strong{
      color: var(--white)
    }
    
  }
`;
