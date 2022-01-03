import { useEffect, useState } from 'react';

export const getJsonData = (params: string): any[] => {
  const [dto, setDto] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/${params}`)
      .then((response) => response.json())
      .then((data) => setDto(data));
  }, []);

  return dto;
};
