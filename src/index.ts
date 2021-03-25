export const stitchTTL = <T extends any[]>(literals: TemplateStringsArray|string[], ...substitutions: T) => {
  return literals.reduce(
    (result, _, i) => (i >= literals.length - 1 ? result : result + substitutions[i + 1]),
    literals[0]
  );
};

export default stitchTTL;