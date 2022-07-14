import React from "react";
import "./btnn.css";
import {
  Column,
  Row,
  Image,
  Input,
  Text,
  SelectBox,
  Button,
  Line,
  List,
  Stack,
} from "components";

const NotLoggedInDesktopPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-ibmplexsans items-start justify-start mx-[auto] 3xl:pb-[117px] lg:pb-[76px] xl:pb-[87px] pb-[98px] w-[100%]">
        <Column className="items-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-start lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pl-[55px] xl:pl-[63px] pl-[71px] 3xl:pl-[85px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] shadow-bs1 w-[100%]">
              <Image
                src={"images/img_whole_2.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain w-[12%]"
                alt="whole"
              />
              <a href="login">
                <Button className="btnn">LoginPage</Button>
              </a>
              <a href="register">
                <Button className="btnn">RegisterPage</Button>
              </a>
              <a href="/loggedinuserscrolledlocationeditenabled">
                <Button className="btnn">LoginedUserPage</Button>
              </a>
              <a href="/loggedinuserscrolledfollowgroupsclicked">
                <Button className="btnn">FollowClickedPage</Button>
              </a>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-transparent border-0 font-medium p-[0] lg:pl-[13px] xl:pl-[15px] pl-[17px] 3xl:pl-[20px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                WrapClassName="3xl:ml-[366px] 3xl:pl-[20px] 3xl:pr-[26px] 3xl:py-[14px] bg-gray_100 flex lg:ml-[237px] lg:pl-[13px] lg:pr-[17px] lg:py-[9px] ml-[305px] pl-[17px] pr-[22px] py-[12px] rounded-radius21 w-[26%] xl:ml-[271px] xl:pl-[15px] xl:pr-[19px] xl:py-[10px]"
                name="Group29"
                placeholder="Search for your favorite groups in ATG"
                prefix={
                  <Image
                    src={"images/img_vector_36.png"}
                    className="cursor-pointer w-[16.03px] h-[16.03px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                    alt="Vector"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <Image
                      onClick={() => setInputvalue("")}
                      src={"images/close2.svg"}
                      className="cursor-pointer w-[16.03px] h-[16.03px] lg:w-[12px] lg:h-[13px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                      alt="Vector"
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[203px] xl:ml-[232px] ml-[261px] 3xl:ml-[313px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                <span className="text-bluegray_900 font-ibmplexsans">
                  Create account.{" "}
                </span>
                <span className="text-blue_A700 font-ibmplexsans font-bold">
                  It’s free!
                </span>
              </Text>
              <Image
                src={"images/img_vector_37.png"}
                className="lg:h-[4px] h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:ml-[5px] xl:ml-[6px] ml-[7px] 3xl:ml-[8px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] object-contain w-[1%]"
                alt="Vector"
              />
            </Row>
          </header>
          <Column
            className="bg-cover bg-repeat items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_group39.png')" }}
          >
            <Column className="bg-gradient  items-start justify-center lg:pb-[62px] xl:pb-[71px] pb-[80px] 3xl:pb-[96px] lg:pl-[155px] xl:pl-[177px] pl-[200px] 3xl:pl-[240px] lg:pt-[222px] xl:pt-[254px] pt-[286px] 3xl:pt-[343px] w-[100%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-white_A700 w-[auto]">
                Computer Engineering
              </Text>
              <Text className="font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                142,765 Computer Engineers follow this
              </Text>
            </Column>
          </Column>
        </Column>
        <Row className="items-start justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] w-[72%]">
          <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
            All Posts(32)
          </Text>
          <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
            Article
          </Text>
          <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
            Event
          </Text>
          <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
            Education
          </Text>
          <Text className="font-normal 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
            Job
          </Text>
          <SelectBox
            className="bg-gray_200 font-medium lg:ml-[318px] xl:ml-[363px] ml-[409px] 3xl:ml-[491px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] rounded-radius4 lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[13%]"
            placeholderClassName="bg-transparent text-black_900"
            name="Group61"
            placeholder="Write a Post"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Image
                src={"images/img_vector_38.png"}
                className="w-[9.17px] h-[4.58px] mr-[12px] object-contain lg:w-[7px] lg:h-[4px] lg:mr-[9px] xl:w-[8px] xl:h-[5px] xl:mr-[10px] 2xl:w-[9px] 2xl:h-[5px] 3xl:w-[11px] 3xl:h-[6px] 3xl:mr-[14px]"
                alt="Vector"
              />
            }
          ></SelectBox>
          <Button
            className="3xl:ml-[19px] 3xl:pl-[12px] 3xl:pr-[14px] 3xl:py-[9px] bg-blue_A700 flex items-center justify-between lg:ml-[12px] lg:pl-[7px] lg:pr-[9px] lg:py-[6px] ml-[16px] pl-[10px] pr-[12px] py-[8px] rounded-radius4 text-center w-[12%] xl:ml-[14px] xl:pl-[8px] xl:pr-[10px] xl:py-[7px]"
            leftIcon={
              <Image
                src={"images/img_vector_39.png"}
                className="w-[22px] text-center lg:w-[17px] xl:w-[19px] 3xl:w-[26px]"
                alt="Vector"
              />
            }
          >
            <div className="bg-transparent font-medium lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-white_A700">
              Join Group
            </div>
          </Button>
        </Row>
        <Line className="bg-gray_300 h-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] mx-[auto] w-[72%]" />
        <Column className="items-start lg:pl-[155px] xl:pl-[177px] pl-[200px] 3xl:pl-[240px] w-[100%]">
          <Line className="bg-black_900 h-[1px] w-[8%]" />
        </Column>
        <Row className="items-start justify-center lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] mx-[auto] w-[72%]">
          <Column className="items-start justify-start w-[77%]">
            <List
              className="gap-[0] min-h-[auto] w-[87%]"
              orientation="vertical"
            >
              <Column className="bg-white_A700 items-start justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[100%]">
                <Column className="items-start w-[100%]">
                  <Image
                    src={"images/img_rectangle5_8.png"}
                    className="lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                    alt="Rectangle5"
                  />
                </Column>
                <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      ✍️{" "}
                    </span>
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      Article
                    </span>
                  </Text>
                  <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="font-semibold leading-[134.17%] lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 text-left w-[93%]">
                        What if famous brands had regular fonts? Meet
                        RegulaBrands!
                      </Text>
                      <Image
                        src={"images/img_vector_40.png"}
                        className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[31px] xl:mb-[36px] mb-[41px] 3xl:mb-[49px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[3%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-gray_700 w-[auto]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </Text>
                  <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Image
                      src={"images/img_rectangle3_10.png"}
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                      alt="Rectangle3"
                    />
                    <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      Sarthak Kamra
                    </Text>
                    <Image
                      src={"images/img_iconactionvis_10.png"}
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[227px] xl:ml-[259px] ml-[292px] 3xl:ml-[350px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                      alt="iconactionvis"
                    />
                    <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      1.4k views
                    </Text>
                    <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                      <Image
                        src={"images/img_vector_41.png"}
                        className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                        alt="Vector"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[100%]">
                <Column className="items-start w-[100%]">
                  <Image
                    src={"images/img_rectangle5_9.png"}
                    className="lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                    alt="Rectangle5"
                  />
                </Column>
                <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      🔬️
                    </span>
                    <span className="text-black_900 font-ibmplexsans font-medium">
                      {" "}
                      Educatio
                    </span>
                    <span className="text-black_900 font-ibmplexsans">n</span>
                  </Text>
                  <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text className="font-semibold leading-[134.55%] lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 text-left w-[93%]">
                        Tax Benefits for Investment under National Pension
                        Scheme launched by Government
                      </Text>
                      <Image
                        src={"images/img_vector_42.png"}
                        className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mb-[31px] xl:mb-[36px] mb-[41px] 3xl:mb-[49px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] object-contain w-[3%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] text-[19px] 3xl:text-[22px] text-gray_700 w-[auto]">
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </Text>
                  <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                    <Image
                      src={"images/img_rectangle3_11.png"}
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                      alt="Rectangle3"
                    />
                    <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                      Sarah West
                    </Text>
                    <Image
                      src={"images/img_iconactionvis_11.png"}
                      className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[249px] xl:ml-[285px] ml-[321px] 3xl:ml-[385px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                      alt="iconactionvis"
                    />
                    <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                      1.4k views
                    </Text>
                    <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                      <Image
                        src={"images/img_vector_43.png"}
                        className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                        alt="Vector"
                      />
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </List>
            <Column className="bg-white_A700 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] outline outline-[1px] outline-gray_300 lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] rounded-radius4 w-[87%]">
              <Column className="items-start w-[100%]">
                <Image
                  src={"images/img_rectangle5_10.png"}
                  className="lg:h-[172px] xl:h-[196px] h-[220px] 2xl:h-[221px] 3xl:h-[265px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  alt="Rectangle5"
                />
              </Column>
              <Column className="items-start justify-start lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] mx-[auto] w-[94%]">
                <Text className="font-normal lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-ibmplexsans font-medium">
                    🗓️
                  </span>
                  <span className="text-black_900 font-ibmplexsans font-medium">
                    {" "}
                    Meetu
                  </span>
                  <span className="text-black_900 font-ibmplexsans">p</span>
                </Text>
                <Column className="items-center mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] pr-[1px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Text className="font-semibold xl:mb-[1px] lg:mb-[1px] mb-[2px] mt-[1px] lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                      Finance & Investment Elite Social Mixer @Lujiazui
                    </Text>
                    <Stack className="bg-gray_400 lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] lg:py-[10px] xl:py-[11px] py-[13px] 3xl:py-[15px] rounded-radius4 w-[6%]">
                      <Image
                        src={"images/img_vector_44.png"}
                        className="absolute h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] justify-center m-[auto] object-contain w-[90%]"
                        alt="Vector"
                      />
                    </Stack>
                  </Row>
                </Column>
                <Stack className="h-[102px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[91px] xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                  <Column className="absolute bg-white_A700 border-bluegray_200 border-bw07 border-solid bottom-[22%] items-center justify-start lg:px-[222px] xl:px-[254px] px-[286px] 3xl:px-[343px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius8 w-[100%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-deep_orange_A200 w-[auto]">
                      Visit Website
                    </Text>
                  </Column>
                  <Row className="absolute items-start justify-start left-[0] top-[6%] w-[54%]">
                    <Image
                      src={"images/img_vector_45.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] mt-[0] object-contain w-[4%]"
                      alt="Vector"
                    />
                    <Text className="font-medium lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Fri, 12 Oct, 2018
                    </Text>
                    <Image
                      src={"images/img_group_6.png"}
                      className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[0] lg:ml-[53px] xl:ml-[61px] ml-[69px] 3xl:ml-[82px] mt-[1px] object-contain w-[3%]"
                      alt="Group"
                    />
                    <Text className="font-medium lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                      Ahmedabad, India
                    </Text>
                  </Row>
                  <Column className="absolute bg-white_A700 items-start justify-start xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] py-[11px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius4 shadow-bs w-[25%]">
                    <Text className="font-normal lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Edit
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Report
                    </Text>
                    <Text className="font-normal lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Option 3
                    </Text>
                  </Column>
                </Stack>
                <Row className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                  <Image
                    src={"images/img_rectangle3_12.png"}
                    className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                    alt="Rectangle3"
                  />
                  <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    Ronal Jones
                  </Text>
                  <Image
                    src={"images/img_iconactionvis_12.png"}
                    className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[245px] xl:ml-[280px] ml-[315px] 3xl:ml-[378px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                    alt="iconactionvis"
                  />
                  <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                    1.4k views
                  </Text>
                  <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                    <Image
                      src={"images/img_vector_46.png"}
                      className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                      alt="Vector"
                    />
                  </Stack>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 items-start justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] outline outline-[1px] outline-gray_300 lg:pl-[15px] xl:pl-[17px] pl-[20px] 3xl:pl-[24px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius4 w-[87%]">
              <Text className="font-medium lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                💼️ Job
              </Text>
              <Column className="items-center lg:mr-[15px] xl:mr-[17px] mr-[20px] 3xl:mr-[24px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[97%]">
                <Row className="items-center justify-between w-[100%]">
                  <Text className="font-semibold lg:text-[17px] xl:text-[19px] text-[22px] 3xl:text-[26px] text-black_900 w-[auto]">
                    Software Developer
                  </Text>
                  <Image
                    src={"images/img_vector_47.png"}
                    className="h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] object-contain w-[3%]"
                    alt="Vector"
                  />
                </Row>
              </Column>
              <Row className="items-start justify-start ml-[1px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[59%]">
                <Image
                  src={"images/img_vector_48.png"}
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:mb-[1px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[4%]"
                  alt="Vector"
                />
                <Text className="font-medium lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                  Innovaccer Analytics Private Ltd.
                </Text>
                <Image
                  src={"images/img_group_7.png"}
                  className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[34px] xl:ml-[39px] ml-[44px] 3xl:ml-[52px] my-[1px] object-contain w-[3%]"
                  alt="Group"
                />
                <Text className="font-medium mb-[1px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:text-[11px] xl:text-[13px] text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                  Noida, India
                </Text>
              </Row>
              <Column className="items-center lg:mr-[15px] xl:mr-[17px] mr-[20px] 3xl:mr-[24px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[97%]">
                <Button className="bg-white_A700 border-bluegray_200 border-bw07 border-solid font-semibold 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] rounded-radius10 lg:text-[10px] xl:text-[11px] text-[13px] 3xl:text-[15px] text-center text-green_A700 w-[100%]">
                  Apply on Timesjobs
                </Button>
                <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Image
                    src={"images/img_rectangle3_13.png"}
                    className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] object-contain rounded-radius50 w-[auto]"
                    alt="Rectangle3"
                  />
                  <Text className="font-semibold lg:mb-[10px] xl:mb-[11px] mb-[13px] 3xl:mb-[15px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                    Joseph Gray
                  </Text>
                  <Image
                    src={"images/img_iconactionvis_13.png"}
                    className="xl:h-[10px] h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[243px] xl:ml-[278px] ml-[313px] 3xl:ml-[375px] lg:my-[14px] xl:my-[16px] my-[18px] 3xl:my-[21px] object-contain w-[2%]"
                    alt="iconactionvis"
                  />
                  <Text className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 w-[auto]">
                    1.4k views
                  </Text>
                  <Stack className="bg-bluegray_50 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] rounded-radius2 w-[6%]">
                    <Image
                      src={"images/img_vector_49.png"}
                      className="absolute lg:h-[11px] xl:h-[13px] h-[14px] 2xl:h-[15px] 3xl:h-[17px] inset-[0] justify-center m-[auto] object-contain w-[93%]"
                      alt="Vector"
                    />
                  </Stack>
                </Row>
              </Column>
            </Column>
          </Column>
          <Column className="items-start justify-start lg:mb-[1269px] xl:mb-[1451px] mb-[1632px] 2xl:mb-[1633px] 3xl:mb-[1959px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[23%]">
            <Column className="items-center xl:pr-[1px] lg:pr-[1px] pr-[2px] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Image
                  src={"images/img_outlinelocatio_2.png"}
                  className="lg:h-[14px] xl:h-[17px] h-[18px] 2xl:h-[19px] 3xl:h-[22px] object-contain lg:w-[14px] xl:w-[16px] w-[18px] 3xl:w-[21px]"
                  alt="outlinelocatio"
                />
                <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Noida, India
                </Text>
                <Image
                  src={"images/img_vector_50.png"}
                  className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:ml-[112px] ml-[126px] 3xl:ml-[151px] lg:ml-[98px] my-[1px] object-contain lg:w-[11px] xl:w-[13px] w-[15px] 3xl:w-[18px]"
                  alt="Vector"
                />
              </Row>
            </Column>
            <Line className="bg-gray_401 h-[0.4px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]" />
            <Column className="items-center lg:mt-[24px] xl:mt-[27px] mt-[31px] 3xl:mt-[37px] pl-[1px] w-[100%]">
              <Row className="items-start justify-start w-[100%]">
                <Image
                  src={"images/img_vector_51.png"}
                  className="lg:h-[11px] xl:h-[12px] h-[13px] 2xl:h-[14px] 3xl:h-[16px] lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[10px] xl:w-[11px] w-[13px] 3xl:w-[15px]"
                  alt="Vector"
                />
                <Text className="font-normal leading-[normal] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900_87 text-left w-[91%]">
                  Your location will help us serve better and extend a
                  personalised experience.
                </Text>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default NotLoggedInDesktopPage;
