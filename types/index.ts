export interface Category extends Navigation {
  sub_categories: SubCategory[];
}

export interface Navigation {
  id: number;
  cat_id: number;
  cat_name_bn: string;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
  sub_categories: SubCategoryExtra[];
}

export interface SubCategory extends SubCategoryExtra {
  subcat_name_bn: string;
  duas: Dua[];
}

export interface SubCategoryExtra {
  id: number;
  cat_id: number;
  subcat_id: number;
  subcat_name_en: string;
  no_of_dua: number;
  duas: DuaExtra[];
}

export interface Dua extends DuaExtra {
  dua_name_bn: string;
  top_bn?: string;
  top_en?: string;
  dua_arabic?: string;
  dua_indopak?: string;
  clean_arabic?: string;
  transliteration_bn?: string;
  transliteration_en?: string;
  translation_bn?: string;
  translation_en?: string;
  bottom_bn?: string;
  bottom_en?: string;
  refference_bn: string;
  refference_en: string;
  audio?: string;
}

export interface DuaExtra {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_en: string;
}
