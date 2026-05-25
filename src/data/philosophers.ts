export type Difficulty = {
  id: number;
  title: string;
  subtitle: string;
  gridSize: number;
  scrambleMoves: number;
  starTimes: {
    three: number;
    two: number;
  };
};

export type PhilosopherStage = {
  id: string;
  order: number;
  levelId: number;
  name: string;
  era: string;
  origin: string;
  image: string;
  idea: string;
  story: string;
};

export const difficulties: Difficulty[] = [
  {
    id: 1,
    title: "Khai mở",
    subtitle: "Bắt đầu từ những câu hỏi",
    gridSize: 3,
    scrambleMoves: 16,
    starTimes: { three: 40, two: 95 },
  },
  {
    id: 2,
    title: "Tĩnh lặng",
    subtitle: "Rèn luyện nội tâm",
    gridSize: 3,
    scrambleMoves: 42,
    starTimes: { three: 52, two: 115 },
  },
  {
    id: 3,
    title: "Lý trí",
    subtitle: "Xây lại nền tảng nhận thức",
    gridSize: 4,
    scrambleMoves: 72,
    starTimes: { three: 100, two: 195 },
  },
  {
    id: 4,
    title: "Biện chứng",
    subtitle: "Xã hội, tự do và lịch sử",
    gridSize: 4,
    scrambleMoves: 126,
    starTimes: { three: 135, two: 260 },
  },
  {
    id: 5,
    title: "Hiện sinh",
    subtitle: "Con người tự kiến tạo ý nghĩa",
    gridSize: 5,
    scrambleMoves: 208,
    starTimes: { three: 220, two: 410 },
  },
];

export const stages: PhilosopherStage[] = [
  {
    id: "socrates",
    order: 1,
    levelId: 1,
    name: "Socrates",
    era: "khoảng 470-399 TCN",
    origin: "Athens, Hy Lạp",
    image: "/portraits/socrates.webp",
    idea: "Tự biết mình chưa biết gì là khởi đầu của minh triết.",
    story:
      "Socrates không để lại tác phẩm viết nào. Ông đi khắp Athens, dùng đối thoại và những câu hỏi liên tục để người đối diện tự xem lại niềm tin của mình. Bị kết tội làm hư thanh niên và bất kính thần thánh, ông chấp nhận bản án tử thay vì từ bỏ cách sống truy vấn sự thật. Hình ảnh Socrates trở thành biểu tượng của lòng can đảm trí tuệ.",
  },
  {
    id: "confucius",
    order: 2,
    levelId: 1,
    name: "Khổng Tử",
    era: "551-479 TCN",
    origin: "Nước Lỗ, Trung Hoa",
    image: "/portraits/confucius.webp",
    idea: "Đạo đức bắt đầu từ việc tu sửa mình và đối xử có lễ với người khác.",
    story:
      "Khổng Tử sống trong thời Xuân Thu đầy biến động. Ông mong muốn cải hóa xã hội bằng giáo dục, lễ nghĩa và nhân đức, từng chu du để thuyết phục các quân vương. Dù ước vọng chính trị không thành khi còn sống, các học trò đã ghi lại lời dạy của ông trong Luận Ngữ. Tư tưởng Nho gia sau đó ảnh hưởng sâu rộng đến văn hóa Đông Á.",
  },
  {
    id: "plato",
    order: 3,
    levelId: 1,
    name: "Plato",
    era: "khoảng 428-348 TCN",
    origin: "Athens, Hy Lạp",
    image: "/portraits/plato.webp",
    idea: "Điều ta thấy chỉ là một phần của hành trình hướng tới chân lý.",
    story:
      "Là học trò của Socrates, Plato bị tác động mạnh bởi cái chết của thầy. Ông sáng tác các đối thoại, đặt Socrates vào những cuộc tranh luận về công lý, tri thức và linh hồn. Plato lập Học viện Academy, một trong những trung tâm học thuật bền bỉ nhất thời cổ đại. Ẩn dụ hang động của ông vẫn gọi người đọc bước ra khỏi bóng tối thành kiến.",
  },
  {
    id: "aristotle",
    order: 4,
    levelId: 2,
    name: "Aristotle",
    era: "384-322 TCN",
    origin: "Stagira, Hy Lạp",
    image: "/portraits/aristotle.webp",
    idea: "Đức hạnh là thói quen lựa chọn mức độ đúng đắn giữa hai cực.",
    story:
      "Aristotle học tại Academy của Plato trước khi trở thành người thầy của Alexander xứ Macedonia. Sau này ông lập trường Lyceum ở Athens, nghiên cứu từ logic, đạo đức đến sinh học và chính trị. Khác với thầy mình, Aristotle nhấn mạnh quan sát thế giới cụ thể. Các khái niệm về lập luận và đức hạnh của ông định hình giáo dục phương Tây trong nhiều thế kỷ.",
  },
  {
    id: "epicurus",
    order: 5,
    levelId: 2,
    name: "Epicurus",
    era: "341-270 TCN",
    origin: "Samos và Athens, Hy Lạp",
    image: "/portraits/epicurus.webp",
    idea: "Hạnh phúc bền vững đến từ sự thanh thản, tình bạn và nhu cầu giản dị.",
    story:
      "Epicurus thành lập ngôi trường gọi là Khu vườn, nơi cả phụ nữ và nô lệ cũng được tham gia học tập, điều hiếm có lúc bấy giờ. Ông không xem khoái lạc là xa hoa, mà là trạng thái ít đau khổ thể xác và ít bất an trong tâm trí. Ông cho rằng hiểu tự nhiên giúp con người bớt sợ thần linh và cái chết. Tư tưởng của ông thường bị hiểu lầm là theo đuổi hưởng thụ vô độ.",
  },
  {
    id: "seneca",
    order: 6,
    levelId: 2,
    name: "Seneca",
    era: "khoảng 4 TCN-65",
    origin: "Corduba và Rome",
    image: "/portraits/seneca.webp",
    idea: "Ta không kiểm soát mọi biến cố, nhưng có thể rèn cách mình đáp lại chúng.",
    story:
      "Seneca là nhà văn, chính khách và triết gia Khắc kỷ tại La Mã. Ông từng bị lưu đày, sau đó trở thành cố vấn của hoàng đế Nero trong một triều đại đầy bất trắc. Những bức thư đạo đức của Seneca bàn về thời gian, mất mát và cách giữ tâm trí vững vàng trước vận mệnh. Khi bị ra lệnh tự sát, ông được hậu thế nhớ đến như một ví dụ đầy phức tạp về lý tưởng và quyền lực.",
  },
  {
    id: "augustine",
    order: 7,
    levelId: 3,
    name: "Augustine",
    era: "354-430",
    origin: "Bắc Phi La Mã",
    image: "/portraits/augustine.webp",
    idea: "Hành trình tìm chân lý cũng là hành trình nhìn vào ký ức và khát vọng nội tâm.",
    story:
      "Augustine sinh tại Tagaste ở Bắc Phi, từng theo đuổi danh vọng, hùng biện và nhiều trường phái tư tưởng trước khi cải đạo sang Kitô giáo. Trong Tự thú, ông kể lại hành trình nội tâm một cách bất thường đối với văn học cổ đại. Khi làm giám mục Hippo, ông viết Thành đô của Thiên Chúa giữa lúc Đế quốc La Mã rung chuyển. Các suy tư về thời gian, ý chí và ân sủng ảnh hưởng lâu dài đến triết học Trung cổ.",
  },
  {
    id: "descartes",
    order: 8,
    levelId: 3,
    name: "René Descartes",
    era: "1596-1650",
    origin: "Pháp và Hà Lan",
    image: "/portraits/descartes.webp",
    idea: "Hoài nghi có phương pháp mở ra một điểm tựa chắc chắn cho tri thức.",
    story:
      "Descartes sống trong thời đại khoa học châu Âu đang thay đổi nhanh chóng. Ông quyết định nghi ngờ mọi điều có thể nghi ngờ để tìm một nền móng không thể lay chuyển, từ đó đưa ra mệnh đề nổi tiếng về cái tôi đang tư duy. Bên cạnh triết học, ông phát triển hình học giải tích, nối đại số với hình học. Công trình của ông đánh dấu bước ngoặt lớn sang triết học cận đại.",
  },
  {
    id: "spinoza",
    order: 9,
    levelId: 3,
    name: "Baruch Spinoza",
    era: "1632-1677",
    origin: "Amsterdam, Hà Lan",
    image: "/portraits/spinoza.webp",
    idea: "Tự do lớn dần khi ta hiểu các nguyên nhân chi phối cảm xúc và hành động.",
    story:
      "Spinoza sinh trong cộng đồng Do Thái gốc Bồ Đào Nha ở Amsterdam, nhưng bị khai trừ do quan điểm cấp tiến. Ông sống thanh đạm bằng nghề mài kính, đồng thời viết một hệ thống triết học trình bày theo dạng hình học. Với ông, Thượng đế và Tự nhiên không tách rời thành hai thực tại. Đạo đức học của Spinoza mô tả con đường từ sự lệ thuộc cảm xúc đến niềm vui của hiểu biết.",
  },
  {
    id: "rousseau",
    order: 10,
    levelId: 4,
    name: "Jean-Jacques Rousseau",
    era: "1712-1778",
    origin: "Geneva và Pháp",
    image: "/portraits/rousseau.webp",
    idea: "Một xã hội chính đáng cần tôn trọng tự do và ý chí chung của công dân.",
    story:
      "Rousseau từ một người lang thang tự học trở thành tác giả gây tranh luận của thời Khai sáng. Ông phê phán việc văn minh có thể làm con người bất bình đẳng và xa rời tính chân thật. Trong Khế ước xã hội, ông đặt câu hỏi làm sao con người vẫn tự do khi sống cùng nhau dưới luật pháp. Tác phẩm của Rousseau tác động mạnh đến giáo dục, văn học và ngôn ngữ chính trị của các cuộc cách mạng.",
  },
  {
    id: "kant",
    order: 11,
    levelId: 4,
    name: "Immanuel Kant",
    era: "1724-1804",
    origin: "Konigsberg, Phổ",
    image: "/portraits/kant.webp",
    idea: "Hãy đối xử với con người như mục đích, không chỉ như công cụ.",
    story:
      "Kant gần như sống trọn đời ở Konigsberg, với một nếp sinh hoạt đều đặn nhưng một dự án trí tuệ đầy tham vọng. Ông hỏi lý trí có thể biết điều gì, nghĩa vụ đạo đức đến từ đâu, và vì sao phán đoán thẩm mỹ có ý nghĩa. Ba bộ Phê phán của ông thay đổi cách triết học hiểu quan hệ giữa tâm trí và thế giới. Lời kêu gọi tư duy độc lập của Kant là biểu tượng của tinh thần Khai sáng.",
  },
  {
    id: "hegel",
    order: 12,
    levelId: 4,
    name: "G. W. F. Hegel",
    era: "1770-1831",
    origin: "Đức",
    image: "/portraits/hegel.webp",
    idea: "Ý thức về tự do phát triển qua xung đột, phủ định và hòa giải trong lịch sử.",
    story:
      "Hegel trưởng thành giữa những biến động của Cách mạng Pháp và chiến tranh Napoleon. Ông xem hiện thực, tư duy và lịch sử là một quá trình vận động, trong đó mâu thuẫn không chỉ phá vỡ mà còn đẩy nhận thức tiến lên. Hiện tượng học tinh thần và các bài giảng của ông ảnh hưởng lớn tới triết học chính trị và lịch sử. Từ Hegel, nhiều dòng tư tưởng đối lập về sau cùng tìm thấy điểm xuất phát.",
  },
  {
    id: "kierkegaard",
    order: 13,
    levelId: 5,
    name: "Søren Kierkegaard",
    era: "1813-1855",
    origin: "Copenhagen, Đan Mạch",
    image: "/portraits/kierkegaard.webp",
    idea: "Lựa chọn cá nhân không thể được sống thay bởi một hệ thống trừu tượng.",
    story:
      "Kierkegaard viết dưới nhiều bút danh, để các giọng nói bất đồng tự đặt người đọc trước lựa chọn của mình. Cuộc đính hôn bị hủy với Regine Olsen và mối quan hệ căng thẳng với giáo hội Đan Mạch in dấu trong tác phẩm của ông. Ông phản đối việc biến đời sống cá nhân thành một sơ đồ lý thuyết không rủi ro. Nỗi lo, tuyệt vọng và bước nhảy đức tin trong sách ông mở đường cho tư tưởng hiện sinh.",
  },
  {
    id: "nietzsche",
    order: 14,
    levelId: 5,
    name: "Friedrich Nietzsche",
    era: "1844-1900",
    origin: "Đức và Thụy Sĩ",
    image: "/portraits/nietzsche.webp",
    idea: "Khi các giá trị cũ lung lay, con người phải gánh trách nhiệm sáng tạo giá trị mới.",
    story:
      "Nietzsche trở thành giáo sư ngữ văn cổ điển khi còn rất trẻ, nhưng bệnh tật khiến ông rời học viện và sống đời du mục. Bằng những tác phẩm mạnh mẽ, giàu âm nhạc và châm ngôn, ông phê phán đạo đức thói quen, chủ nghĩa hư vô và sự tự thỏa mãn. Những khái niệm như siêu nhân hay ý chí quyền lực thường bị cắt nghĩa sai lệch sau khi ông mất khả năng sáng tác. Ông là một trong các tiếng nói gây tranh luận nhất của triết học hiện đại.",
  },
  {
    id: "beauvoir",
    order: 15,
    levelId: 5,
    name: "Simone de Beauvoir",
    era: "1908-1986",
    origin: "Paris, Pháp",
    image: "/portraits/beauvoir.webp",
    idea: "Bản sắc được định hình bởi cách ta sống và những cấu trúc xã hội quanh ta.",
    story:
      "Simone de Beauvoir là triết gia, tiểu thuyết gia và nhà hoạt động gắn với truyền thống hiện sinh Pháp. Trong Giới tính thứ hai, bà phân tích cách phụ nữ bị biến thành kẻ khác trong lịch sử và văn hóa, mở rộng tranh luận về tự do thành một vấn đề xã hội cụ thể. Bà viết về tuổi già, đạo đức và cuộc sống của chính mình với tinh thần tự phản tỉnh. Công trình của Beauvoir trở thành nền tảng quan trọng cho triết học nữ quyền hiện đại.",
  },
];

export function getDifficulty(levelId: number): Difficulty {
  return difficulties.find((difficulty) => difficulty.id === levelId) ?? difficulties[0];
}
