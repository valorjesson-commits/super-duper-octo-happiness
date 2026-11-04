/**
 * @file Tree-sitter grammar for super-duper-octo-happiness
 * @author Valor
 * @license MIT
 */

module.exports = grammar({
  name: 'super_duper_octo_happiness',

  rules: {
    // NOTE: add the actual grammar rules here
    source_file: $ => repeat($.word),

    word: $ => /[a-zA-Z0-9_-]+/,
  }
});
